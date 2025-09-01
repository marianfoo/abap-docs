  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_math.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20CL_ABAP_DECFLOAT%2C%20ABENCL_ABAP_DECFLOAT_DOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class CL\_ABAP\_DECFLOAT

The system class CL\_ABAP\_DECFLOAT contains methods for handling [decimal floating point numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecfloat_glosry.htm "Glossary Entry").

-   The methods READ\_DECFLOAT34 and READ\_DECFLOAT16 convert strings to decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the roundings performed.
-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR convert currency amounts to decimal floating point numbers as specified by a currency key and vice versa.

Hint

The formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm) of the [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm) and [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) statements works like the method CONVERT\_DECFLOAT\_TO\_CURR.