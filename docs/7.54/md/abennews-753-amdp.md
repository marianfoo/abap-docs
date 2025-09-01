  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-753.htm) → 

AMDP in Release 7.53

[1\. AMDP scalar functions](#!ABAP_MODIFICATION_1@1@)

[2\. Enhancement to logical database schemas](#!ABAP_MODIFICATION_2@2@)

[3\. Access to the current ABAP database schema](#!ABAP_MODIFICATION_3@3@)

[4\. Restrictions removed](#!ABAP_MODIFICATION_4@4@)

[5\. Option CDS SESSION CLIENT mandatory](#!ABAP_MODIFICATION_5@5@)

Modification 1

AMDP Scalar Functions

[AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") scalar functions are now supported alongside [AMDP table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_table_function_glosry.htm "Glossary Entry"). The [AMDP function implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_methods.htm) of an AMDP scalar function has an elementary return value and can be used in ABAP like a regular function method.

In the implementation of [AMDP scalar functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry"), it is possible to specify the database-specific option [DETERMINISTIC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethod_by_db_proc.htm) after OPTIONS. This buffers the result of the function for the duration of a query.

Modification 2

Enhancement to Logical Database Schemas

In [logical database schemas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry"), a new flag can be specified that allows the current [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") to be mapped in the transaction DB\_SCHEMA\_MAP. The predefined name :abap\_db\_schema should be used for mappings of this type.

Modification 3

Access to the Current ABAP Database Schema

In an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry"), a [logical database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry") to which the current [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is mapped (using the predefined name :abap\_db\_schema) can be specified in the macro [$ABAP.schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_logical_db_schemas.htm). For each logical database schema used in a macro like this, the new addition [USING SCHEMA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethod_by_db_proc.htm) must be specified in the statement METHOD to declare the used objects. In this way, an AMDP method can access database objects located in different database schemas in different systems (including the ABAP database schema) without needing to modify the syntax.

Modification 4

Restrictions Removed

The following restrictions were removed:

-   Tabular input parameters are now allowed in [AMDP function implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") for [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"). Previously, only elementary input parameters were allowed. In AMDP function implementations for [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), however, the restriction that only elementary input parameters are allowed still applies.
    
-   Tabular input parameters of [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") and of [AMDP function implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") can now be made optional using [OPTIONAL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm), but it is still not possible to specify a start value with [DEFAULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm).
    
-   When a replacement parameter declared using [DEFAULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_general.htm) is specified for an elementary input parameter of an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_methods.htm), the following (previously undocumented) restrictions were lifted:
    

-   Constants declared using the addition [VALUE IS INITIAL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm) can now be specified for the data types d, t, and x. This previously produced a syntax error.

-   Constants declared using the addition [VALUE '00010101'](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm) can now be specified for the data type d, or the literal '00010101' can be specified directly. Both previously produced a syntax error.

-   Constants declared by specifying numeric literals after [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm) and whose lengths are not precisely 8 or 6 can now be specified for the data types d and t. This previously produced a syntax error. Until now, values of literals with lengths of precisely 8 or 6 were handled like a string. This incorrect behavior was also modified and the numeric value is handled as the number of days since 01.01.001 or as the number of seconds since 00:00:00. This modification is incompatible if an [AMDP procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") or [function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_glosry.htm "Glossary Entry") with an input parameter of this type is called from other [database procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") or [functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_function_glosry.htm "Glossary Entry") without an actual parameter being assigned to the parameter in question.

In AMDP methods, the addition DEFAULT now behaves in the same way as in regular methods. It still cannot be specified for the data types string, xstring, decfloat16, and decfloat34, however, and no literals can be specified that cannot be converted into the data type of the input parameter.

Modification 5

Option CDS SESSION CLIENT Mandatory

The option [CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_amdp_options.htm) is now mandatory when an AMDP method accesses the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) is determined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm). If this option is not specified in this case, a syntax error occurs. The option sets the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") of the database that can be addressed under the name [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") to a particular value when the method is called from ABAP. An exception of the class CX\_AMDP\_CDS\_CLIENT\_MISMATCH can now no longer be raised.