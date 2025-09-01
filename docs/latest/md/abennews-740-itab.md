  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP02](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Internal Tables in ABAP Release 7.40, SP02

[1\. Table Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Built-In Functions for Internal Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Explicit Definition of an Empty Key](#!ABAP_MODIFICATION_3@3@)
[4\. Table Sharing for Boxed Components](#!ABAP_MODIFICATION_4@4@)
[5\. References in Dynamically Specified Components](#!ABAP_MODIFICATION_5@5@)
[6\. Optimization of the WHERE Condition](#!ABAP_MODIFICATION_6@6@)
[7\. Expression for Dynamic Sorts](#!ABAP_MODIFICATION_7@7@)

Modification 1   

Table Expressions

The new [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) allow reads to be performed on internal tables in operand positions.

Modification 2   

Built-In Functions for Internal Tables

The following functions were introduced:

-   The [table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_function_glosry.htm "Glossary Entry") [line\_index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenline_index_function.htm) can be used to identify a line number in an index of an internal table and use it in operand positions.
-   The [predicate function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_function_glosry.htm "Glossary Entry") [line\_exists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenline_exists_function.htm) can be used to check the existence of table lines; the resulting truth value can then be used directly.

Modification 3   

Explicit Definition of an Empty Key

The new addition [EMPTY KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_primary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_primary_key.htm), and so on can be used to define an [empty table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm) explicitly for standard tables. Without this addition, empty table keys occur only if the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_standard_key.htm) of a standard table does not contain any components suitable as key fields.

Modification 4   

Table Sharing for Boxed Components

Until now there was no [table sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_sharing_glosry.htm "Glossary Entry") if the line types contained [boxed components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry"). This restriction has now been lifted.

Modification 5   

References in Dynamically Specified Components

Object component selectors can now be specified when [components are specified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm) dynamically (this was not previously the case). However, those specifications can be made that are statically possible. For example, when using ASSIGN attributes cannot be accessed that are not known statically. This is the case, for example, when using superclass references to access subclass components.

Modification 6   

Optimization of the WHERE Condition

The rules described under [Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm) have been modified as follows:

-   Except in comparisons for equality, optimizations are now also performed for the [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm). This enables a simple check to be made on the initial value, in particular for columns typed as [reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_variable_glosry.htm "Glossary Entry"). A static WHERE condition cannot contain any duplicate or overlapping specified keys, if the prerequisites for optimizations are met. This means that this change is occasionally incompatible: Syntax errors are now produced in those WHERE conditions in which a key column is checked using both a comparison for equality with one value and using IS INITIAL.
-   Syntax warnings are no longer produced by mistake for non-optimizable type combinations in comparisons, even if the comparison does not contain any key columns. Non-optimizable type combinations now produce syntax warnings only if they actually modify key fields of a hash key or of the initial part of a sorted key. The syntax warnings have been improved so that the non-optimizable combination is mentioned in the text.
-   The following type combinations were not previously detected as non-optimizable when secondary keys were used in comparisons:
    
    -   string with n, i (b, s), f, decfloat16, and decfloat34
    -   xstring with c and string
    
    There was no syntax error or exception in these cases. Instead, all lines of the internal table were checked linearly when the statement was executed or reads performed using the primary key. Optimized reads are guaranteed when using secondary keys, which is why the combinations above now produce syntax errors or raise exceptions. This represents an incompatible change.
    

Modification 7   

Expression for Dynamic Sorts

In the statement [SORT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm), the table (otab) can now be specified for dynamic sorts as the result of an expression or functional method call.