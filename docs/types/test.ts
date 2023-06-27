/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import iterator = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterator( 10, 5, 3 ); // $ExpectType Iterator<number>
	iterator( 10, 5, 3, {} ); // $ExpectType Iterator<number>
	iterator( 10, 5, 3, { 'iter': 10 } ); // $ExpectType Iterator<number>
}

// The compiler throws an error if the function is provided invalid input arguments...
{
	iterator( '10', 5.0, 3 ); // $ExpectError
	iterator( 10, '5', 3 ); // $ExpectError
	iterator( 10, 5, 3, { 'iter': 'beep' } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterator(); // $ExpectError
	iterator( 10 ); // $ExpectError
	iterator( 10, 5 ); // $ExpectError
}
