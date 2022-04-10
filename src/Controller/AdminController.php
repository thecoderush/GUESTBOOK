<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpCache\StoreInterface;
use Symfony\Component\HttpKernelInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\KernelInterface;

class AdminController extends AbstractController 
{
    #[Route('/admin/http-cache/{uri<.*>}', methods: ['PURGE'])]
    public function purgeHttpCache(KernelInterface $kernel, Request $request, string $uri, StoreInterface $store): Response
    {
        if ('prod' === $kernel->getEnvironment()) {
            return new Response('KO', 400);
        }

        $store->purge($request->getSchemeAndHttpHost().'/'.$uri);
    
        return new Response('Done');
    }
}