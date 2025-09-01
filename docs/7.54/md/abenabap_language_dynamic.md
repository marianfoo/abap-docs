  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) → 

Dynamic Program Editing

In addition to static program development in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), the following components of ABAP programs can be edited and generated using language elements:

-   [ABAP source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_generic_program.htm)

-   [Text elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentextpool.htm)

-   [Dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_generic_dynpro.htm)

This type of program development is called dynamic program development.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm).

Notes

-   On the one hand, the statements for dynamic program development provide a powerful and flexible method of dynamic programming, but on the other hand this type of programming is very elaborate and the created programs are difficult to maintain. Therefore, it is recommended that other dynamic programming options for application programs are used first, before using dynamic program development. In ABAP, dynamic programming is facilitated by:

-   [Generic data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") for [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry")

-   Data objects, whose size is not statically defined ([internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry"), [strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_glosry.htm "Glossary Entry"))

-   [Field symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_variable_glosry.htm "Glossary Entry")

-   Dynamic creation of data types using [runtime time creation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry")

-   Dynamic creation of data types using [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm)

-   Dynamic token specification - that is, the dynamic specification of operands or entire clauses as data objects in parentheses

-   The statements for dynamic program development do not carry out authorization checks or other checks. These must be programmed separately. The following special function modules can be used for the required checks in addition to the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapauthority-check.htm):

-   The function module RS\_ACCESS\_PERMISSION performs all authorization checks that are also performed when ABAP Editor is called.

-   The function module TR\_SYS\_PARAMS and other function modules of the function group STR9 determine whether [repository objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_object_glosry.htm "Glossary Entry") can be changed.

-   See [ABAP Command Injections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneric_prog_scrty.htm).

Continue
[ABAP Source Code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_generic_program.htm)
[text element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentextpool.htm)
[Screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_generic_dynpro.htm)