  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [System Classes for Numbers](javascript:call_link\('abencl_abap_math.htm'\)) → 

Random Numbers

The class CL\_ABAP\_RANDOM calls the pseudo random number generator Mersenne Twister for different numeric types.

For the one-dimensional case, the following special classes generate random numbers for the different numeric types:

-   CL\_ABAP\_RANDOM\_INT for type i
-   CL\_ABAP\_RANDOM\_INT8 for type int8
-   CL\_ABAP\_RANDOM\_FLOAT for type f
-   CL\_ABAP\_RANDOM\_PACKED for type p
-   CL\_ABAP\_RANDOM\_PACKED\_DEC1 to CL\_ABAP\_RANDOM\_PACKED\_DEC14 for type p with 1 to 14 decimal places.
-   CL\_ABAP\_RANDOM\_DECFLOAT16 for type decfloat16
-   CL\_ABAP\_RANDOM\_DECFLOAT34 for type decfloat34

Example

Creation of a pseudo random number of the type i between 1 and 100, initialized by the system time.

DATA(r) = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                      min  = 1
                                      max  = 100 ).