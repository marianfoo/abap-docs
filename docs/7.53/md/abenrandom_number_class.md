---
title: "Random Numbers"
description: |
  The class CL_ABAP_RANDOM calls the pseudo random number generator Mersenne Twister for different numeric types. For the one-dimensional case, the following special classes generate random numbers for the different numeric types: Example Creates a pseudo random number of the type i between 1 and 10
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrandom_number_class.htm"
abapFile: "abenrandom_number_class.htm"
keywords: ["do", "if", "case", "class", "data", "types", "abenrandom", "number"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_math.htm) → 

Random Numbers

The class CL\_ABAP\_RANDOM calls the pseudo random number generator Mersenne Twister for different numeric types.

For the one-dimensional case, the following special classes generate random numbers for the different numeric types:

Example

Creates a pseudo random number of the type i between 1 and 100 (initialized by the system time).

DATA(r) = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                      min  = 1
                                      max  = 100 ).