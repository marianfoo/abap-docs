  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Character String Processing in Release 7.40, SP02

[1\. New formatting option ALPHA](#!ABAP_MODIFICATION_1@1@)

[2\. New formatting option XSD](#!ABAP_MODIFICATION_2@2@)

[3\. Comparisons of string expressions](#!ABAP_MODIFICATION_3@3@)

[4\. Assignments of string expressions](#!ABAP_MODIFICATION_4@4@)

Modification 1

New Formatting Option ALPHA

The new [formatting option ALPHA](javascript:call_link\('abapcompute_string_format_options.htm'\)) for [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [character string templates](javascript:call_link\('abenstring_templates.htm'\)) inserts leading zeroes in front of strings of digits or removes these zeroes.

Modification 2

New Formatting Option XSD

The new [formatting option XSD](javascript:call_link\('abapcompute_string_format_options.htm'\)) for [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)) creates their asXML format for elementary data types.

Modification 3

Comparisons of String Expressions

[Comparisons of string expressions](javascript:call_link\('abenlogexp_rules_expr_char.htm'\)) are now possible when the [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)). This was not previously the case.

Modification 4

Assignments of String Expressions

Exceptions raised in [conversions](javascript:call_link\('abenconversion_elementary.htm'\)) can now be handled when making assignments of string expressions to target fields. This was not previously the case. Exceptions raised (for example, in assignments of non-numeric values to numeric data types or in overflows) can now be handled in the normal way.