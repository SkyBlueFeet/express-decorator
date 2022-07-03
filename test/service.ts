import { Path, GET, POST, DELETE, PUT, PathParam, QueryParam, BodyParam, CookieParam, HeaderParam, Request, Response, BaseController, Controller } from '../src/main'

function testMidware1(req, res, next) {
    req.body.test1 = "test1"
    next();
}

function testMidware2(req, res, next) {
    req.body.test2 = "test2"
    next();
}

@Path('/user', [testMidware1])
export class TestService extends BaseController {

    @GET('/:id', [testMidware2])
    list( @PathParam('id') id: string, @QueryParam('name') name: string, @Request req) {
        return [id, name, req.body.test1, req.body.test2]
    }

    @DELETE('/:id')
    delete( @PathParam('id') id) {
        return id;
    }

    @POST('')
    create( @BodyParam('user') user, @Request req) {
        return user;
    }

    @PUT('')
    update( @BodyParam('user') user) {
        return user;
    }

    @GET('/test/resundefined')
    resUndefined( @Response res) {
        res.send('custom response');
    }

    @GET('/test/cookie')
    testCookie( @CookieParam('name') cookieName, @CookieParam('xx') p2) {

        return Promise.resolve([cookieName, p2]);
    }

    @GET('/test/header')
    testHeader( @HeaderParam('Cookie') cookieName, @HeaderParam('User-Agent') p2) {

        return Promise.resolve([cookieName, p2]);
    }
} 



@Controller('/service', [testMidware1])
export class TestOtherService extends BaseController {

    @GET('/:id', [testMidware2])
    list( @PathParam('id') id: string, @QueryParam('name') name: string, @Request req) {
        return [id, name, req.body.test1, req.body.test2]
    }

    @DELETE('/:id')
    delete( @PathParam('id') id) {
        return id;
    }

    @POST('')
    create( @BodyParam('user') user, @Request req) {
        return user;
    }

    @PUT('')
    update( @BodyParam('user') user) {
        return user;
    }

    @GET('/test/resundefined')
    resUndefined( @Response res) {
        res.send('custom response');
    }

    @GET('/test/cookie')
    testCookie( @CookieParam('name') cookieName, @CookieParam('xx') p2) {

        return Promise.resolve([cookieName, p2]);
    }

    @GET('/test/header')
    testHeader( @HeaderParam('Cookie') cookieName, @HeaderParam('User-Agent') p2) {

        return Promise.resolve([cookieName, p2]);
    }
}   
