  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP02](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character%20String%20Processing%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-CHARACTER_PROCESSING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion%20for%20improvement:)

Character String Processing in ABAP Release 7.40, SP02

[1\. New Formatting Option ALPHA](#!ABAP_MODIFICATION_1@1@)
[2\. New Formatting Option XSD](#!ABAP_MODIFICATION_2@2@)
[3\. Comparisons of String Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. Assignments of String Expressions](#!ABAP_MODIFICATION_4@4@)

Modification 1   

New Formatting Option ALPHA

The new [formatting option ALPHA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) inserts leading zeros in front of strings of digits or removes these zeros.

Modification 2   

New Formatting Option XSD

The new [formatting option XSD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) creates their asXML format for elementary data types.

Modification 3   

Comparisons of String Expressions

[Comparisons of string expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_expr_char.htm) are now possible when the [comparison operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomp_operator_glosry.htm "Glossary Entry") [BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm). This was not previously the case.

Modification 4   

Assignments of String Expressions

Exceptions raised in [conversions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) can now be handled when making assignments of string expressions to target fields. This was not previously the case. Exceptions raised (for example, in assignments of non-numeric values to numeric data types or in overflows) can now be handled in the regular way.