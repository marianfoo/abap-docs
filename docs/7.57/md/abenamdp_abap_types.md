  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Macros](javascript:call_link\('abenamdp_macros.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Macro for ABAP Types, ABENAMDP_ABAP_TYPES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

AMDP - Macro for ABAP Types

Syntax

... "$ABAP.type( \[name =\] abap\_type )" ...

Effect

Specifies the predefined [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") $ABAP.type for an ABAP type.

In an AMDP method implemented in SQLScript, the AMDP macro $ABAP.type can be used to access the ABAP type abap\_type. For abap\_type, all [elementary](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") non- [generic](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") types can be specified that would be possible after a TYPE addition in an ABAP implementation of the method. These are as follows:

-   The [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) i, int8, decfloat16, decfloat34, f, string, xstring, d and t.
-   All visible elementary types, which are defined with [TYPES](javascript:call_link\('abaptypes.htm'\)) at this place, and which are of their own class, a different class or an interface.
-   All elementary types defined in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)), such as data elements or elementary components of structured types.

The ABAP runtime framework replaces this expression in accordance with the rules specified in the [mapping tables](javascript:call_link\('abenamdp_hdb_sqlscript_mapping.htm'\)) in the corresponding HANA type. abap\_type is not case-sensitive.

Examples

The following table shows how some built-in or self-defined ABAP types can be specified in macro $ABAP.type and implemented in HANA types.

Macro

Conversion

"$ABAP.type( int8 )"

BIGINT

"$ABAP.type( string )"

NCLOB

"$ABAP.type( cl\_abap\_docu=>name )"

NVARCHAR (70)

"$ABAP.type( sy-mandt )"

NVARCHAR (3)

"$ABAP.type( s\_carrname )"

NVARCHAR (20)

Executable Example

[Access to ABAP Types](javascript:call_link\('abenamdp_abap_types_abexa.htm'\))