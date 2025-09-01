  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) → 

Dynamic Program Editing

In addition to static program development in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), the following components of ABAP programs can be edited and generated using language elements:

-   [ABAP source code](javascript:call_link\('abenabap_generic_program.htm'\))

-   [Text elements](javascript:call_link\('abentextpool.htm'\))

-   [Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\))

This type of program development is called dynamic program development.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)).

Notes

-   On the one hand, the statements for dynamic program development provide a powerful and flexible method of dynamic programming, but on the other hand this type of programming is very elaborate and the created programs are difficult to maintain. Therefore, it is recommended that other dynamic programming options for application programs are used first, before using dynamic program development. In ABAP, dynamic programming is facilitated by:

-   [Generic data types](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry")

-   Data objects, whose size is not statically defined ([internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry"))

-   [Field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry")

-   Dynamic creation of data types using [runtime time creation](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry")

-   Dynamic creation of data types using [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\))

-   Dynamic token specification - that is, the dynamic specification of operands or entire clauses as data objects in parentheses

-   The statements for dynamic program development do not carry out authorization checks or other checks. These must be programmed separately. The following special function modules can be used for the required checks in addition to the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)):

-   The function module RS\_ACCESS\_PERMISSION performs all authorization checks that are also performed when ABAP Editor is called.

-   The function module TR\_SYS\_PARAMS and other function modules of the function group STR9 determine whether [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") can be changed.

-   See [ABAP Command Injections](javascript:call_link\('abengeneric_prog_scrty.htm'\)).

Continue
[ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\))
[Text Elements](javascript:call_link\('abentextpool.htm'\))
[Dynpro](javascript:call_link\('abenabap_generic_dynpro.htm'\))