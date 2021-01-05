import { loadStripe } from '@stripe/stripe-js';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const TestKeys = {
  'KB_ONLY_WORKOUTS': 'price_1I0nvEKMKjJVMuayZ9j2aXj8',
  'DB_ONLY_WORKOUTS': 'price_1I0nusKMKjJVMuayFz58eoTy',
  'BODYWEIGHT_FINISHERS': 'price_1I0nuVKMKjJVMuaylRimvn6A',
  'FatLoss12': 'price_1I0ntjKMKjJVMuayRBzh3Ccj',
  'FatLoss8': 'price_1I5e2bKMKjJVMuayFW6LOOX7',
  'Strength12': 'price_1I0nssKMKjJVMuayd9cVJsuj',
  'Strength8': 'price_1I5e3dKMKjJVMuayz58KABmU',
  'FF12': 'price_1I5nE0KMKjJVMuaygqdqz16k',
  'FF8': 'price_1I0nrfKMKjJVMuayIfBrjo2H',
  'Online121': 'price_1I0npNKMKjJVMuayTKl8yKQi',
}

export const LiveKeys = {
  'KB_ONLY_WORKOUTS': 'price_1I5YluKMKjJVMuayDfYfl3TI',
  'DB_ONLY_WORKOUTS': 'price_1I5YlCKMKjJVMuayLe54rjqH',
  'BODYWEIGHT_FINISHERS': 'price_1I5YZIKMKjJVMuayR2jJhLO5',
  'FatLoss12': 'price_1I5YY0KMKjJVMuayRWnxVTRu',
  'FatLoss8': 'price_1I5YXlKMKjJVMuay846qNGdG',
  'Strength12': 'price_1I5YWjKMKjJVMuaygtbzzLUS',
  'Strength8': 'price_1I5YWVKMKjJVMuayyGHZyauh',
  'FF12': 'price_1I5YVMKMKjJVMuaytLRZC4k7',
  'FF8': 'price_1I5YV1KMKjJVMuayRbFdFTt1',
  'Online121': 'price_1I5YOcKMKjJVMuayBk33h02P',
}

export type key = 'KB_ONLY_WORKOUTS' | 'DB_ONLY_WORKOUTS' | 'BODYWEIGHT_FINISHERS' | 'FatLoss12' | 'FatLoss8' | 'Strength12' | 'Strength8' | 'FF12' | 'FF8' | 'Online121';

export const StripeBuyNow = async (key: key) => {
  let error;
  const live = false;
  debugger;
  const location = window.location.href;
  
  const stripeLivePromise = loadStripe('pk_live_51I0mfdKMKjJVMuayrEaMd5b2Jju1o4TuVZRHcvFTPPYLjf7WX3IPlGyHOHWIcoMR01ejgmlFpazKGIOtzDomngU70012CeyE39');
  const stripeTestPromise = loadStripe('pk_test_51I0mfdKMKjJVMuaybe4I3l0JoAypvpUQsn57Cs6kogWUkji67AYZMeTEfSBZRfxP2a4vDEZQ82IBj7JsOAy480tz00jojMFWRA');
  
  const stripePrice = live ? LiveKeys[key] : TestKeys[key];

  const stripe = live ? await stripeLivePromise : await stripeTestPromise;
  stripe && (
    { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: stripePrice,
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `${location}?success=true`,
      cancelUrl: `${location}?cancel=true`,
    })
  );

  console.log("Checkout Clicked");
}