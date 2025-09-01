  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP08](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740_sp08.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Expressions%20and%20Functions%20in%20ABAP%20Release%207.40%2C%20SP08%2C%20ABENNEWS-740_SP08-EXPRESSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion%20for%20improvement:)

Expressions and Functions in ABAP Release 7.40, SP08

[1\. Predicative Method Calls](#!ABAP_MODIFICATION_1@1@)
[2\. New Boolean Function](#!ABAP_MODIFICATION_2@2@)
[3\. Iteration Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. Table Filtering](#!ABAP_MODIFICATION_4@4@)
[5\. Start Value for Constructor Expressions](#!ABAP_MODIFICATION_5@5@)
[6\. Inserting Table Lines in Constructed Tables](#!ABAP_MODIFICATION_6@6@)
[7\. Grouping Internal Tables](#!ABAP_MODIFICATION_7@7@)
[8\. Default Value for Table Expressions](#!ABAP_MODIFICATION_8@8@)
[9\. Restrictions Removed](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Predicative Method Calls

The [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry")

[meth( ) IS NOT INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm)

can now be specified in a short form as a [predicate method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry")

[... meth( ) ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_calls.htm)

This makes is possible to use [predicate methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_method_glosry.htm "Glossary Entry") in logical expressions as if their return value had a real Boolean data type.

Modification 2   

New Boolean Function

The new Boolean function [xsdbool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) returns the value X or a blank of the type c with the length 1, depending on the truth value of the logical expression specified as the argument. This expands the existing function [boolc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm), whose return value has the type string. This can produce unexpected results in comparisons with text fields and in checks on the initial value.

The return value of [xsdbool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) still references the special type XSDBOOLEAN from ABAP Dictionary. This means it is handled like a real truth value in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasjson_glosry.htm "Glossary Entry").

Critical uses of [boolc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) now produce a syntax check warning.

Modification 3   

Iteration Expressions

The iteration expressions introduced using FOR (until now only available for table iterations in [table comprehensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_comprehension_glosry.htm "Glossary Entry")) have been expanded to include [conditional iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_conditional.htm) with the additions UNTIL and WHILE. This makes it possible to program any iteration in the constructor expressions [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_itab.htm) and [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm) for creating internal tables.

A new [reduction operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreduce_operator_glosry.htm "Glossary Entry") [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) can execute these conditional iterations and table iterations to construct the results of any data types. In the case of table iterations, this is also known as [table reduction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_reduction_glosry.htm "Glossary Entry").

Modification 4   

Table Filtering

The new [filter operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfilter_operator_glosry.htm "Glossary Entry") [FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_filter.htm) can be used to perform [table filtering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_filtering_glosry.htm "Glossary Entry") in which conditions are used to select or remove lines from an internal table. The result is used to construct a new internal table.

Modification 5   

Start Value for Constructor Expressions

The new addition BASE can be used to provide the return value of a constructor expression for structures or internal tables with a start value, before the actual construction starts. The addition BASE can be used in the following constructor expressions:

-   Instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_struct.htm) and value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_struc.htm) for structures
-   Instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_itab.htm) and value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm) for internal tables
-   Component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm) in the [basic form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_constr_arg_type.htm)

Modification 6   

Inserting Table Lines in Constructed Tables

When internal tables are constructed using the instance operator [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_itab.htm) and the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm), [LINES OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_lspc.htm) can now be used to insert multiple lines from an existing internal table in the target table.

Modification 7   

Grouping Internal Tables

The new variants [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_groups_of.htm) and [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_group.htm) in an [iteration expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeniteration_expression_glosry.htm "Glossary Entry") for [table iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_iteration_glosry.htm "Glossary Entry") using [FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) can be used to group the lines of internal tables and to evaluate the groups.

Modification 8   

Default Value for Table Expressions

If the type of the result of a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) or a chaining of table expressions is controlled using the constructor operators VALUE or REF, the additions [OPTIONAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_optional_default.htm) and [DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_optional_default.htm) can be used to specify a default value. If no lines are found, no exception is raised and the default value is returned instead.

Modification 9   

Restrictions Removed

The following restrictions were removed:

-   In the conversion operator [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm):
    
    -   A [string expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_expression_glosry.htm "Glossary Entry") can now be converted to any data type. Previously only character-like data types were allowed.
    -   A [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") can now be converted to the character-like data types c and string. Previously only byte-like data types were allowed. All other types remain invalid.
    -   In conversions to a compatible type, a syntax check warning no longer appears when a [LET expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm) exists.
    
    This makes the conversion operator CONV a full replacement for the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) for elementary data types. As before, the value operator cannot be used to construct any values for elementary data objects except for the initial value.
    
-   If a casting operator [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_cast.htm) is specified in a [result position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresult_position_glosry.htm "Glossary Entry")
    -   and the result of a [string expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_expression_glosry.htm "Glossary Entry") is assigned, any data type can now be specified after CAST. Previously only character-like data types were allowed.
    -   and the result of a [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") is assigned, the data type specified after CAST can now also be a character-like data type c and string. Previously only byte-like data types were allowed. All other types remain invalid.
-   A [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") on the right side of an [assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_bit_expr.htm) can now also be assigned to character-like data types c and string. Previously only byte-like data types were allowed. All other types remain invalid.