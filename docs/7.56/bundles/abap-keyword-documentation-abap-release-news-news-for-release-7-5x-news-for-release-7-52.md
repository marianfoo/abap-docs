# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.52

Included pages: 14


### abennews-752.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) → 

News for Release 7.52

The kernel release for Release 7.52 is 7.53.

-   [ABAP Objects in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_objects.htm)
-   [Assignments in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-assignments.htm)
-   [Expressions and Functions in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-expressions.htm)
-   [Internal Tables in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-itab.htm)
-   [ABAP SQL in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_sql.htm)
-   [ABAP CDS in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_cds.htm)
-   [AMDP in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-amdp.htm)
-   [Data Clusters in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-data_cluster.htm)
-   [File Interface in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-dataset.htm)
-   [Messages in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-messages.htm)
-   [ABAP Daemons in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-daemons.htm)
-   [ABAP Doc in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_doc.htm)
-   [Further Changes in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-others.htm)

Continue
[ABAP Objects in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_objects.htm)
[Assignments in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-assignments.htm)
[Expressions and Functions in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-expressions.htm)
[Internal Tables in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-itab.htm)
[ABAP SQL in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_sql.htm)
[ABAP CDS in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_cds.htm)
[AMDP in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-amdp.htm)
[Data Clusters in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-data_cluster.htm)
[File Interface in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-dataset.htm)
[Messages in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-messages.htm)
[ABAP Daemons in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-daemons.htm)
[ABAP Doc in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_doc.htm)
[Further Changes in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-others.htm)


### abennews-752-abap_objects.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

ABAP Objects in Release 7.52

Modification

Implementing Interfaces

When implementing interfaces in classes with the statement [INTERFACES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinterfaces_class.htm), the following restrictions do not apply:

-   Methods and attributes of component interfaces of the implemented interface can now be specified after the additions ABSTRACT METHODS, FINAL METHODS, and DATA VALUES using the name of the component interface and the [interface component selector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_comp_selector_glosry.htm "Glossary Entry")~. Until now, this was only possible for methods by using an [alias name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalias_glosry.htm "Glossary Entry"), for attributes the interface itself had to be included.
-   Attributes that are declared in component interfaces can now be specified after the addition DATA VALUES by using [alias names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalias_glosry.htm "Glossary Entry").


### abennews-752-assignments.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

Assignments in Release 7.52

Modification

System Class for Dynamic Mapping

The system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_corresponding.htm) now has a new method [CREATE\_WITH\_VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_corresponding_3.htm), which allows the values of any suitable data objects to be assigned to the components of the target structure or target table.


### abennews-752-expressions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

Expressions and Functions in Release 7.52

[1\. Exception Object After RAISE EXCEPTION](#!ABAP_MODIFICATION_1@1@)
[2\. Object Component Selector After Table Expressions](#!ABAP_MODIFICATION_2@2@)
[3\. Key Specification for the FILTER Operator](#!ABAP_MODIFICATION_3@3@)
[4\. Pseudo Component table\_line in Mapping Rules](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Exception Object After RAISE EXCEPTION

The operand position for the reference variable oref of the statement [RAISE EXCEPTION oref](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) is now a [general expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Modification 2   

Object Component Selector After Table Expressions

If an [object component selector \->](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_exp_chaining.htm) is specified directly after a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm), the restriction that this is not possible for table expressions whose [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_exp_result.htm) is determined with the value operator VALUE no longer applies.

Modification 3   

Key Specification for the FILTER Operator

In the variant of the constructor expression where a [filter table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_filter_table.htm) is specified, the addition USING KEY can be used either for the filter table or for the source table. Previously, the filter table had to have a sorted key or a hash key. This restriction does not apply if such a key can be specified for the source table instead.

Modification 4   

Pseudo Component table\_line in Mapping Rules

It is now possible to specify the [pseudo component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line as a source component of a source table in [mapping rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_mapping.htm) of the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_corresponding.htm), if the table has an elementary row type. In all other cases, the behavior is undefined when the pseudo component is specified.


### abennews-752-itab.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

Internal Tables in Release 7.52

Modification

Virtual Sorting of Internal Tables

The new method VIRTUAL\_SORT of class CL\_ABAP\_ITAB\_UTILITIES enables virtual sorting of a set of internal tables with the same number of rows. The internal tables are treated internally like a single combined table containing all the columns of the involved internal tables. The result is an array of row numbers of the virtually sorted combined table. See the related [executable examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvirtual_sort_abexas.htm).


### abennews-752-abap_sql.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

ABAP SQL in Release 7.52

[1\. Internal Tables as Data Sources](#!ABAP_MODIFICATION_1@1@)
[2\. Relational Expressions](#!ABAP_MODIFICATION_2@2@)
[3\. Conversion Functions](#!ABAP_MODIFICATION_3@3@)
[4\. Path Expressions](#!ABAP_MODIFICATION_4@4@)
[5\. Access Control](#!ABAP_MODIFICATION_5@5@)
[6\. ORDER BY and UP TO, OFFSET in Subquery](#!ABAP_MODIFICATION_6@6@)
[7\. Cardinality in LEFT OUTER JOIN](#!ABAP_MODIFICATION_7@7@)
[8\. FOR ALL ENTRIES and Strings in the SELECT List](#!ABAP_MODIFICATION_8@8@)
[9\. Strict Mode in the Syntax Check](#!ABAP_MODIFICATION_9@9@)
[10\. Client Handling](#!ABAP_MODIFICATION_10@10@)
[11\. Replacement Service for ABAP SQL](#!ABAP_MODIFICATION_11@11@)

Modification 1   

Internal Tables as Data Sources

An internal table can be specified as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) data source of a query. This statement cannot be executed on all database systems, if the data from the internal table needs to be passed to the database.

Modification 2   

Relational Expressions

The following is now possible for [conditions in expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm):

-   Size comparisons can now be made between character-like data types and are no longer restricted to numeric data types.
-   The operator BETWEEN is also no longer restricted to numeric data types and SQL expressions can now be specified on the right side.
-   The operator LIKE is now also supported.

Modification 3   

Conversion Functions

The new type conversion functions [BINTOHEX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_type_conv_func.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_type_conv_func.htm) make it possible to convert byte strings to character strings (and the other way round) in [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm), which is not possible with a [CAST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cast.htm) expression.

Modification 4   

Path Expressions

The following is now possible for [path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path.htm):

-   Path expressions can now be split over several source code rows at the blanks in the syntax for parameter passes and filter conditions and also before slashes (/).
-   Associations can now be used whose target data sources are [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry").
-   [Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_parameters.htm) can now be passed after the associations of a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path.htm). This makes it possible to specify paths whose associations have CDS entities with input parameters as data sources.
-   In path expressions, it is now possible to specify the cardinality and type of the join expression as [attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path_filter.htm).
-   [Filter conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path_filter.htm) for associations can now be specified in path expressions.

Modification 5   

Access Control

The new addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) switches [CDS access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") off.

Modification 6   

ORDER BY and UP TO, OFFSET in Subquery

In a [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_glosry.htm "Glossary Entry"), it is now possible to use an [ORDER BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaporderby_clause.htm) clause and the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm) can be used after the clause. It is not possible to execute a subquery with an ORDER BY clause on all database systems

Modification 7   

Cardinality in LEFT OUTER JOIN

In a [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm), an addition ONE TO MANY can now be specified for the cardinality. This is evaluated as a note for optimization by [SAP HANA databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry").

Modification 8   

FOR ALL ENTRIES and Strings in the SELECT List

In the previous [strict modes of the syntax check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm), the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_all_entries.htm) of statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) could not be specified together with columns of the types STRING and RAWSTRING or LCHR and LRAW in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm). This restriction has been removed and now the syntax check simply issues a warning.

Modification 9   

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_752.htm), which handles the statement more strictly than the regular syntax check.

Modification 10   

Client Handling

The following (stricter) rules for the additions [USING CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm) now apply when switching and disabling [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) in reads on [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   [CDS access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for client-independent access. For this reason, the additions [USING CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) can only be used in ABAP SQL in reads on CDS entities for which access control is switched off using the annotation AccessControl.authorizationCheck.#NOT\_ALLOWED or the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) clause of an ABAP SQL query.
-   [Path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path.htm) can only be evaluated if automatic client handling is switched on. This cannot be done using [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) in cases where path expressions are used that contain [associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v1.htm) whose target data source is client-specific In path expressions in the FROM clause, the source data sources of the associations cannot be client-specific either.

Modification 11   

Replacement Service for ABAP SQL

The class [CL\_OSQL\_REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_osql_replace.htm) can be used in [unit tests](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunit_test_glosry.htm "Glossary Entry") with [ABAP Unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_unit_glosry.htm "Glossary Entry") to redirect database accesses in ABAP SQL to other databases.


### abennews-752-abap_cds.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

ABAP CDS in Release 7.52

[1\. Annotations as CDS Objects](#!ABAP_MODIFICATION_1@1@)
[2\. Cardinality in LEFT OUTER JOIN](#!ABAP_MODIFICATION_2@2@)
[3\. Access Control](#!ABAP_MODIFICATION_3@3@)
[4\. Extensions](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Annotations as CDS Objects

From Release 7.52, it is possible to define [CDS annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") as standalone [CDS objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_object_glosry.htm "Glossary Entry") using the statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation.htm) in [DDLA source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddla_source_code_glosry.htm "Glossary Entry").

A [CDS annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") dictates precisely how the annotation needs to be specified in [CDS source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_source_code_glosry.htm "Glossary Entry") in [annotation syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry").

In [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), annotation definitions are covered by source code coloring and Code Completion. In [DDLA source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddla_source_code_glosry.htm "Glossary Entry") and [DDLX source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddlx_source_code_glosry.htm "Glossary Entry"), the definitions are also covered by the syntax check.

SAP delivers annotation definitions for the [SAP annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_annotation_glosry.htm "Glossary Entry"). No other annotations should be used at present.

Modification 2   

Cardinality in LEFT OUTER JOIN

In a [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_joined_data_source_v1.htm), an addition TO ONE or TO MANY can be specified for the cardinality. This addition is evaluated by an [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry") as a note for optimization.

This option exists in earlier releases in ABAP CDS, but has been documented only from Release 7.52. In [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752-abap_sql.htm), the corresponding syntax was introduced in Release 7.52.

Modification 3   

Access Control

The following enhancements have been implemented in CDS access control:

-   [CDS roles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") can now also be defined for [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry"). When a CDS table function is accessed in ABAP SQL. The access conditions are evaluated by default.
-   Extensions in DDL for defining CDS roles:
    -   When [access conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_expr.htm) are specified, there are no longer any restrictions on how Boolean operators and parentheses are used. The Boolean operator NOT can now also be used and any combination of parentheses is possible.
    -   When a path is specified for an element in an [access condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_condition_glosry.htm "Glossary Entry"), multi-value associations are now also tracked.
    -   Further conditions can now be appended after [INHERIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_inherited_rule.htm) using AND.
    -   In a [literal condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_literal.htm) *\[*NOT*\]* LIKE, it is now possible to specify an escape character using ESCAPE.
    -   Blanks are now no longer forced in certain positions.

Modification 4   

Extensions

[CDS view extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_extend_glosry.htm "Glossary Entry") are now connected to [Switch Framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_glosry.htm "Glossary Entry").


### abennews-752-amdp.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

AMDP in Release 7.52

[1\. Reference to ABAP Types](#!ABAP_MODIFICATION_1@1@)
[2\. AMDP Options](#!ABAP_MODIFICATION_2@2@)
[3\. Logical HDI Containers](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Reference to ABAP Types

When an [AMDP method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_macro_glosry.htm "Glossary Entry")

["$ABAP.type( \[name =\] abap\_type )"](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_abap_types.htm)

can be used to reference ABAP types. The ABAP runtime environment replaces these schemas on the database with the associated database types.

Modification 2   

AMDP Options

The new addition [AMDP OPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_amdp_options.htm) for [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods.htm) statements can be used to define attributes of [AMDP methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") in their declaration:

-   The [READ-ONLY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_amdp_options.htm) option only allows reads in the implementation of the AMDP methods.
-   The [CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_amdp_options.htm) option sets the [session variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensession_variable_glosry.htm "Glossary Entry") of the database that can be addressed under the name[$session.client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry") to a particular value when the method is called from ABAP. It avoids the warning from the syntax check and the exception CX\_AMDP\_CDS\_CLIENT\_MISMATCH when an AMDP method accesses the [CDS managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_client_handling_v1.htm) is determined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_client_handling_v1.htm).

Modification 3   

Logical HDI Containers

Alongside the existing [logical database schemas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry"), [logical HDI containers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") can now be used as further [logical schemas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_schema_glosry.htm "Glossary Entry") in the [AMDP macro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_logical_db_schemas.htm). The mapping of a physical database schema to a logical HDI container is made in the definition of an [ABAP-managed HDI container](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamhc_glosry.htm "Glossary Entry"), which itself links [HDI objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhdi_object_glosry.htm "Glossary Entry") to the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencts_glosry.htm "Glossary Entry").


### abennews-752-data_cluster.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

Data Clusters in Release 7.52

Modification

New Catchable Exceptions

The following [exceptions in IMPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrabax_import_from_database.htm) were previously non-catchable but are now assigned to the exception class CX\_SY\_IMPORT\_FORMAT\_ERROR and hence can be handled:

-   CONNE\_ILLEGAL\_TRANSPORT\_HEADER
-   CONNE\_ILLEGAL\_TRANSPORT\_VERS
-   CONNE\_COMPRESS\_FLAG\_INVALID
-   CONNE\_CONTAINER\_TOO\_SHORT
-   CONNE\_DESCRIPTION\_FLAG\_INVALID
-   CONVERSION\_CODEPAGE\_UNKNOWN
-   IMPORT\_DESCR\_ENDMARK\_MISSING
-   IMPORT\_UNEXPECTED\_END\_OF\_DATA
-   IMPORT\_CONTAINER\_MISSING
    -   IMPORT\_FROM\_DATA\_BUFFER\_EMPTY is now also IMPORT\_CONTAINER\_MISSING
    -   IMPORT\_FROM\_INTTABLE\_EMPTY is now also IMPORT\_CONTAINER\_MISSING
-   IMPORT\_CONTAINER\_MISSING
-   IMPORT\_DECOMPRESS\_FAILED
-   IMPORT\_OBJECT\_DESTROYED


### abennews-752-dataset.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

File Interface in Release 7.52

[1\. Placeholders in Paths Specified in Automatic Authorization Checks](#!ABAP_MODIFICATION_1@1@)
[2\. Automatic Authorization Checks for the FILTER Addition](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Placeholders in Paths Specified in Automatic Authorization Checks

In the database table SPTH, which is relevant for [automatic authorization checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_authority.htm), placeholders for specific profile parameters or for the current client can now be specified in the column PATH. These placeholders are then replaced accordingly when evaluated. The possible placeholders are specified in the documentation of the table SPTH.

Modification 2   

Automatic Authorization Checks for the FILTER Addition

If the addition [FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_os_addition.htm) is used in the statement OPEN DATASET and an [automatic authorization check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_authority.htm) is made using an authorization group and the authorization object S\_PATH when a file is accessed using the database table SPTH, the current user must have an authorization for the activity "A6" (Read) or "A7" (Change) when using the addition FILTER.

For compatibility reasons, the undocumented empty value for the activity is still accepted.


### abennews-752-messages.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

Messages in Release 7.52

Modification

Implicit Message Specification in RAISE EXCEPTION MESSAGE

A new short form [USING MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm) of statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm) makes it possible to pass the content of system fields sy-msg... implicitly to the exceptions of exception classes that include the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_dyn_msg.htm).


### abennews-752-daemons.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

ABAP Daemons in Release 7.52

[1\. Introduction of ABAP Daemons](#!ABAP_MODIFICATION_1@1@)
[2\. Timers for the Non-Blocking Mode](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Introduction of ABAP Daemons

An [ABAP Daemon](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon.htm) is an instance of an [ABAP Daemon class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") in an [ABAP Daemon session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"). An ABAP Daemon is created again automatically every time a [runtime error](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_glosry.htm "Glossary Entry") or a message of type E, A, or X causes a program termination.

Modification 2   

Timers for the Non-Blocking Mode

[ABAP Timers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_timer_glosry.htm "Glossary Entry") can be used to define wait times in the [non-blocking mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennon_blocking_model_glosry.htm "Glossary Entry"). An ABAP Timer is created by [ABAP Timer Manager](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_timer_manager_glosry.htm "Glossary Entry") and handled using [ABAP Timer handlers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry"). The associated class and interfaces are CL\_ABAP\_TIMER\_MANAGER, IF\_ABAP\_TIMER\_MANAGER, and IF\_ABAP\_TIMER\_HANDLER.

The new object types replace the previous types CL\_APC\_TIMER\_MANAGER, IF\_APC\_TIMER\_MANAGER, and IF\_APC\_TIMER\_HANDLER.


### abennews-752-abap_doc.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

ABAP Doc in Release 7.52

[1\. Documentation Links](#!ABAP_MODIFICATION_1@1@)
[2\. Test Relations](#!ABAP_MODIFICATION_2@2@)
[3\. Further Changes](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Documentation Links

The new syntax {@link ...} makes it possible to link to other documentation of repository objects (or its components) in [ABAP Doc comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry").

Modification 2   

Test Relations

The new syntax @testing ... in [ABAP Doc comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") associates test classes and test methods with repository objects. This makes it possible to display and execute these classes and methods in the [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") of the repository objects.

Modification 3   

Further Changes

The following changes have also been made to [ABAP Doc comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry"):

-   Opening and closing tags no longer need to be specified in lowercase letters.
-   The restriction to 7 bit ASCII characters no longer applies. An ABAP Doc comment can now contain any 16 bit Unicode characters.
-   <br> or <br/> can be used to specify a line break. <br></br> should no longer be used.
-   The special characters @ and < now only need to be escaped when they are placed directly in front of another character.
-   Lists can now be nested.
-   The tags <p>, <ul>, or <ol> can now be placed within <h1>, <h2>, <h3>, <p>, <em>, or <strong> tags.
-   Text can now be specified directly within <ol> and <ul> tags.
-   In the <ol> tag, the attributes reversed, start, and type can now be specified with their traditional HTML meaning.
-   The attributes specified in tags are now checked by the syntax check.


### abennews-752-others.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

Further Changes in Release 7.52

[1\. Search in Subtrees in the SAP GUI Version of the ABAP Keyword Documentation](#!ABAP_MODIFICATION_1@1@)
[2\. Standard ABAP with restricted object use](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Search in Subtrees in the SAP GUI Version of the ABAP Keyword Documentation

In the documentation display of the SAP GUI version of the ABAP keyword documentation, the search for a search term can be restricted to the current subtree. This option can be selected from the context menu of a node or in the dialog window of the documentation.

Modification 2   

Standard ABAP with restricted object use

In Release 7.52, a new [ABAP version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_version_glosry.htm "Glossary Entry") [Standard ABAP with Restricted Object Use](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_abap_restr_obj_glosry.htm "Glossary Entry") was introduced. The internal version ID in column UCCHECK of system table TRDIR is "4".
