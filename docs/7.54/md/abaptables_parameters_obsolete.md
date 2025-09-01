  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Function Modules](javascript:call_link\('abenfunction_modules_obsolete.htm'\)) → 

FUNCTION - table\_parameters

Obsolete Syntax

... TABLES p1  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](javascript:call_link\('abapfunction_typing_obsolete.htm'\))*}* *\[*OPTIONAL*\]*
           p2  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](javascript:call_link\('abapfunction_typing_obsolete.htm'\))*}* *\[*OPTIONAL*\]*
           ...

Effect

Defines the [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") t1 t2 ... in the [function module interface](javascript:call_link\('abenfunction.htm'\)) display in the source code of function modules. Table parameters are obsolete CHANGING parameters that are typed as [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). If an internal table without a header line or a [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is passed as an actual parameter to a formal parameter of this type, an empty local header line is generated in the function module. If an internal table with a header line is used as an actual parameter, both the table body and the header line are passed to the function module. Pass by value is not possible in formal parameters defined using TABLES.

Information about TYPE, STRUCTURE, and OPTIONAL is available in [Properties of the Interface Parameters](javascript:call_link\('abenfunction_parameters.htm'\)). The following special rules apply to table parameters:

-   Only [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is allowed in TABLES parameters.
    
-   Only the following types can be specified after TYPE:
    

-   A table type itab\_type from ABAP Dictionary (including type groups) with the table category standard table and a flat row type. The table type can be full or generic.

-   The specified generic type STANDARD TABLE.

-   If no type is specified explicitly, STANDARD TABLE is used implicitly.

-   A type with TYPE REF TO is not permitted.
    

When TABLES parameters are accessed that are not bound to any type-compliant actual parameters, a special [exception situation](javascript:call_link\('abentables_parameters_restrictions.htm'\)) can arise.

Notes

-   The table key of a table parameter is either defined in full in the typing or it is taken from the actual parameter in the case of generic typing. This means that the table key of a table parameter is not necessarily the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)).
    
-   Formal parameters defined with TABLES can be replaced by formal parameters defined with CHANGING. A local work area can be created for the internal table in the function module by using the addition LIKE LINE OF itab of the statement DATA.
    
-   Exception: Provided that [basXML](javascript:call_link\('abenbasxml_glosry.htm'\) "Glossary Entry") is not set as the [RFC log](javascript:call_link\('abenrfc_protocol.htm'\)), using TABLES parameters for [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") for [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry") can be significantly faster than passing by means of the CHANGING parameter.
    

Continue
[Exceptions when Accessing TABLES Parameters](javascript:call_link\('abentables_parameters_restrictions.htm'\))