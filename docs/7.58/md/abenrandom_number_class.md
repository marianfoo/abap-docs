  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Random%20Numbers%2C%20ABENRANDOM_NUMBER_CLASS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

Creation of a pseudo random number of the type i between 1 and 100, initialized by the UTC time.

FINAL(time) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(r) = cl\_abap\_random\_int=>create( seed = CONV i( time )
                                       min  = 1
                                       max  = 100 ).