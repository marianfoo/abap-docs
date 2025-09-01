  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [System Classes for Numbers](javascript:call_link\('abencl_abap_math.htm'\)) → 

Random Numbers

The class CL\_ABAP\_RANDOM calls the pseudo random number generator Mersenne Twister for different numeric types.

For the one-dimensional case, the following special classes generate random numbers for the different numeric types:

Example

Creates a pseudo random number of the type i between 1 and 100 (initialized by the system time).

DATA(r) = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                      min  = 1
                                      max  = 100 ).