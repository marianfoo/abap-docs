  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Consuming%20Elementary%20Types%2C%20ABENC1_CONSUMER_RULES_ELEM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

C1 Contract Rules for Consuming Elementary Types

The data type of

-   DDIC domains or DDIC data elements
-   components of DDIC structures and DDIC database tables or elements of CDS entities
-   public types of global ABAP classes or interfaces

are [allowed to be changed by the API provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm) as follows:

-   Integer types INT1, INT2, and INT4 or b, s, and i can be replaced by integer types of a larger value range.
-   The length of data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or c, p can be increased.
-   The number of decimal places of data types DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or p can be increased.

All these changes result in a larger value range compared with the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operations with structured data that contain components of such a type.

-   [Operations with Elementary Data Objects](#@@ITOC@@ABENC1_CONSUMER_RULES_ELEM_1)
-   [Operations with Structures](#@@ITOC@@ABENC1_CONSUMER_RULES_ELEM_2)

Operations with Elementary Data Objects   

When working with elementary data objects of one of the above types the behavior after an allowed type change depends on the type, the operand position and the content.

Possible Problems

Examples for possible problems are:

-   In assignments of data objects that have a changed type to data objects whose type is not changed, content can be cut off or overflow exceptions may occur.
-   In statements that require compatible data types, syntax errors can occur. Examples are:
    -   Assignments between [data reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry").
    -   Access to internal tables with an elementary line type using a table key.
    -   Importing data from data clusters with [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm).
-   In statements that require lossless assignments, exceptions can occur. Examples are:
    -   [Lossless operator EXACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_exact.htm)
    -   [Host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) in read positions of ABAP SQL.

Mitigation

When declaring data objects, always refer to the released data types themselves. Do not refer to user-defined types. Use data objects referring to released types only at operand positions where changing the type cannot produce an error.

Operations with Structures   

Changing the data type of a component of a structure changes the [technical type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") of the complete structure. This has a large impact since there are many operand positions, where compatibility is required for structures and generally, the same errors can occur that result from changing the elements of structures described below and the same mitigations apply.