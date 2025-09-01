  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Consuming Elementary Types, ABENC1_CONSUMER_RULES_ELEM, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Consuming Elementary Types

The data type of

-   DDIC domains or DDIC data elements
-   components of DDIC structures and DDIC database tables or elements of CDS entities
-   public types of global ABAP classes or interfaces

are [allowed to be changed](javascript:call_link\('abenc1_provider_rules_elem.htm'\)) as follows:

-   Integer types INT1, INT2, and INT4 or b, s, and i can be replaced by integer types of a larger value range.
-   The length of data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or c, p can be increased.
-   The number of decimal places of data types DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or p can be increased.

All these changes result in a larger value range compared with the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operations with structured data that contain components of such a type.

-   [Operations with Elementary Data Objects](#abenc1-consumer-rules-elem-1-------operations-with-structures---@ITOC@@ABENC1_CONSUMER_RULES_ELEM_2)

Operations with Elementary Data Objects   

When working with elementary data objects of one of the above types the behavior after an allowed type change depends on the type, the operand position and the content.

Possible Problems

Examples for possible problems are:

-   In assignments of data objects that have a changed type to data objects whose type is not changed, content can be cut off or overflow exceptions may occur.
-   In statements that require compatible data types, syntax errors can occur. Examples are:
    -   Assignments between [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry").
    -   Access to internal tables with an elementary line type using a table key.
    -   Importing data from data clusters with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).
-   In statements that require lossless assignments, exceptions can occur. Examples are:
    -   [Lossless operator EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\))
    -   [Host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) in read positions of ABAP SQL.

Mitigation

When declaring data objects, always refer to the released data types themselves. Do not refer to self defined types. Use data objects referring to released types only at operand positions where changing the type cannot produce an error.

Operations with Structures   

Changing the data type of a component of a structure changes the [technical type](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") of the complete structure. This has a large impact since there are many operand positions, where compatibility is required for structures and generally, the same errors can occur that result from changing the elements of structures described below and the same mitigations apply.