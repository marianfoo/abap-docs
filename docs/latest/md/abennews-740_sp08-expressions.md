  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

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

The [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry")

[meth( ) IS NOT INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))

can now be specified in a short form as a [predicate method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry")

[... meth( ) ...](javascript:call_link\('abenpredicative_method_calls.htm'\))

This makes is possible to use [predicate methods](javascript:call_link\('abenpredicate_method_glosry.htm'\) "Glossary Entry") in logical expressions as if their return value had a real Boolean data type.

Modification 2   

New Boolean Function

The new Boolean function [xsdbool](javascript:call_link\('abenboole_functions.htm'\)) returns the value X or a blank of the type c with the length 1, depending on the truth value of the logical expression specified as the argument. This expands the existing function [boolc](javascript:call_link\('abenboole_functions.htm'\)), whose return value has the type string. This can produce unexpected results in comparisons with text fields and in checks on the initial value.

The return value of [xsdbool](javascript:call_link\('abenboole_functions.htm'\)) still references the special type XSDBOOLEAN from ABAP Dictionary. This means it is handled like a real truth value in serializations and deserializations to or from [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry").

Critical uses of [boolc](javascript:call_link\('abenboole_functions.htm'\)) now produce a syntax check warning.

Modification 3   

Iteration Expressions

The iteration expressions introduced using FOR (until now only available for table iterations in [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry")) have been expanded to include [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) with the additions UNTIL and WHILE. This makes it possible to program any iteration in the constructor expressions [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables.

A new [reduction operator](javascript:call_link\('abenreduce_operator_glosry.htm'\) "Glossary Entry") [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) can execute these conditional iterations and table iterations to construct the results of any data types. In the case of table iterations, this is also known as [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry").

Modification 4   

Table Filtering

The new [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)) can be used to perform [table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") in which conditions are used to select or remove lines from an internal table. The result is used to construct a new internal table.

Modification 5   

Start Value for Constructor Expressions

The new addition BASE can be used to provide the return value of a constructor expression for structures or internal tables with a start value, before the actual construction starts. The addition BASE can be used in the following constructor expressions:

-   Instance operator [NEW](javascript:call_link\('abennew_constructor_params_struct.htm'\)) and value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_struc.htm'\)) for structures
-   Instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables
-   Component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) in the [basic form](javascript:call_link\('abencorresponding_constr_arg_type.htm'\))

Modification 6   

Inserting Table Lines in Constructed Tables

When internal tables are constructed using the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), [LINES OF](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) can now be used to insert multiple lines from an existing internal table in the target table.

Modification 7   

Grouping Internal Tables

The new variants [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) and [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) in an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") using [FOR](javascript:call_link\('abenfor_itab.htm'\)) can be used to group the lines of internal tables and to evaluate the groups.

Modification 8   

Default Value for Table Expressions

If the type of the result of a [table expression](javascript:call_link\('abentable_expressions.htm'\)) or a chaining of table expressions is controlled using the constructor operators VALUE or REF, the additions [OPTIONAL](javascript:call_link\('abentable_exp_optional_default.htm'\)) and [DEFAULT](javascript:call_link\('abentable_exp_optional_default.htm'\)) can be used to specify a default value. If no lines are found, no exception is raised and the default value is returned instead.

Modification 9   

Restrictions Removed

The following restrictions were removed:

-   In the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)):
    
    -   A [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") can now be converted to any data type. Previously only character-like data types were allowed.
    -   A [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can now be converted to the character-like data types c and string. Previously only byte-like data types were allowed. All other types remain invalid.
    -   In conversions to a compatible type, a syntax check warning no longer appears when a [LET expression](javascript:call_link\('abaplet.htm'\)) exists.
    
    This makes the conversion operator CONV a full replacement for the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) for elementary data types. As before, the value operator cannot be used to construct any values for elementary data objects except for the initial value.
    
-   If a casting operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) is specified in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry")
    -   and the result of a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") is assigned, any data type can now be specified after CAST. Previously only character-like data types were allowed.
    -   and the result of a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is assigned, the data type specified after CAST can now also be a character-like data type c and string. Previously only byte-like data types were allowed. All other types remain invalid.
-   A [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") on the right side of an [assignment](javascript:call_link\('abenequals_bit_expr.htm'\)) can now also be assigned to character-like data types c and string. Previously only byte-like data types were allowed. All other types remain invalid.