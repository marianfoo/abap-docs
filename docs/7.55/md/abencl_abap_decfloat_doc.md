  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_math.htm) → 

System Class CL\_ABAP\_DECFLOAT

The system class CL\_ABAP\_DECFLOAT contains methods for handling [decimal floating point numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendecfloat_glosry.htm "Glossary Entry").

-   The methods READ\_DECFLOAT34 and READ\_DECFLOAT16 convert strings to decimal floating point numbers. The exceptions of these methods are more significant than those of a normal assignment. Furthermore, the methods return a return value that reveals information about the roundings performed.

-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR convert currency amounts to decimal floating point numbers as specified by a currency key and vice versa.

Hint

The formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm) of the [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm) and [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) statements works as the method CONVERT\_DECFLOAT\_TO\_CURR.