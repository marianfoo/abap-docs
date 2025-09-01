  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) → 

AMDP Macros

Syntax

... "$ABAP.macro( ... )" ...

Effect

Specifies an [](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry")[AMDP](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") macro in an AMDP method, which is implemented in an [SQLScript](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)). An AMDP macro is always specified in double quotation marks and always introduced with $ABAP. The macro itself is specified with macro. The relevant parameters for the chosen macro can be specified in the parentheses. The format for $ABAP is case-sensitive. The format for macro is not case-sensitive.

The ABAP runtime environment replaces a AMDP, including the quotation marks, during the implementation on the database, in accordance with the rule for the relevant macro. The following macros are currently predefined:

-   [$ABAP.type](javascript:call_link\('abenamdp_abap_types.htm'\)) for ABAP types

-   [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)) for logical schemas

No other macros can be specified. In particular, no custom macros can be defined.

Notes

-   The syntax for macros is currently only possible in the implementation language [SQLScript](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)).

-   Macros, which are specified in comments or in single quotation marks, are not replaced.

Continue
[AMDP - Macro for ABAP Types](javascript:call_link\('abenamdp_abap_types.htm'\))
[AMDP - Macro for Logical Schemas](javascript:call_link\('abenamdp_logical_db_schemas.htm'\))