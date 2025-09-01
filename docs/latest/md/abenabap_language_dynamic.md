  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Dynamic%20Program%20Development%2C%20ABENABAP_LANGUAGE_DYNAMIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Dynamic Program Development

In addition to static program development in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") or the [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), the following components of ABAP programs can be dynamically created and maintained using language elements:

-   [ABAP Source Code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_program.htm)
-   [Text Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentextpool.htm)
-   [Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_dynpro.htm)

This type of program development is called dynamic program development.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm).

Hints

-   On the one hand, the statements for dynamic program development provide a powerful and flexible method of dynamic programming, but on the other hand this type of programming is very elaborate, and the created programs are difficult to maintain. Therefore, it is recommended that other dynamic programming options for application programs are used first, before using dynamic program development. In ABAP, dynamic programming is enabled by:
    -   [Generic data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") for [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_glosry.htm "Glossary Entry")
    -   Data objects, whose size is not statically defined ([internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry"), [strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_glosry.htm "Glossary Entry"))
    -   [Field symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_variable_glosry.htm "Glossary Entry")
    -   Dynamic creation of data types using [runtime time creation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry")
    -   Dynamic creation of data types using [CREATE DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data.htm)
    -   Dynamic token specification, that is, the dynamic specification of operands or entire clauses as data objects in parentheses
-   The statements for dynamic program development do not perform authorization checks or other checks. These must be programmed separately. The following special function modules can be used for the required checks in addition to the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check.htm):
    -   The function module RS\_ACCESS\_PERMISSION performs all authorization checks that are also performed when the ABAP Editor is called.
    -   The function module TR\_SYS\_PARAMS and other function modules of the function pool STR9 determine whether [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") can be changed.
-   See [ABAP Command Injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_prog_scrty.htm).

Continue
[ABAP Source Code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_program.htm)
[Text Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentextpool.htm)
[Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_generic_dynpro.htm)