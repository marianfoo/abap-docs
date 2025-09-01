---
title: "Syntax"
description: |
  ... line_exists( table_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) ) ... Effect The built-in(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) predicate function(https://help.sap.com/doc/abapdocu_757_index_htm
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_exists_function.htm"
abapFile: "abenline_exists_function.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "field-symbol", "abenline", "exists", "function"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_functions.htm) →  [rel\_exp - Predicate Functions for Table-Like Arguments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_functions_tabs.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - line_exists, ABENLINE_EXISTS_FUNCTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

rel\_exp - line\_exists

Syntax

... line\_exists( [table\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) ) ...

Effect

The [built-in](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) [predicate function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_function_glosry.htm "Glossary Entry") line\_exists checks whether a line of an internal table [specified](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_itab_line.htm) in the [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) exists and returns the corresponding [truth value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentruth_value_glosry.htm "Glossary Entry"). In addition to single table expressions, [chainings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_chaining.htm) can also be specified for table\_exp, whose result is a line of an internal table.

Within line\_exists, an explicitly specified table key in the table line [table\_line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_itab_line.htm) of the table expression is handled in the same way as a [free search key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_free.htm) specified for this table key.

Hints

-   The table expression is only used to check the existence of the specified line. No temporary [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm) is created.
-   The predicate function line\_exists can be considered as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) with the addition [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_outdesc.htm) followed by sy-subrc being checked.
-   The predicate function line\_exists cannot be used to determine the line number in a table index of a search key used for the search, since table expressions do not fill the system field sy-tabix. The table function [line\_index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_index_function.htm) can be used instead.
-   If a search key specified in [table\_line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_itab_line.htm) in the table expression covers the initial part of a [secondary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") without being specified explicitly after KEY, a syntax check warning that can be hidden by a pragma occurs, since the function is generally more performant if the secondary key is specified explicitly.
-   As in other use cases of table expressions, line\_exists must be used carefully to avoid duplicate selections. Therefore, line\_exists should not be used to first check the existence of a line and then read it. Instead, the table expression can be [assigned to a field symbol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_writable_exp.htm) and then sy-subrc checked. If the line in question usually exists, the table expression can be specified in the required operand position and the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND caught.
-   As well as assigning a table expression a [default value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_optional_default.htm) for lines that are not found, there is also the option of checking the existence of lines.

Example

DATA flight\_tab TYPE HASHED TABLE OF spfli
                     WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @flight\_tab.
IF line\_exists( flight\_tab\[ carrid = 'LH'
                            connid = '0400' \] ).
  ...
ENDIF.