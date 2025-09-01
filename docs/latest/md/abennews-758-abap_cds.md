  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.58](javascript:call_link\('abennews-758.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20in%20ABAP%20Release%207.58%2C%20ABENNEWS-758-ABAP_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS in ABAP Release 7.58

[1\. CDS Analytical Projection View, Projected Entity](#!ABAP_MODIFICATION_1@1@)
[2\. @AbapCatalog.preserveKey is Obsolete](#!ABAP_MODIFICATION_2@2@)
[3\. Release of CDS Simple Types](#!ABAP_MODIFICATION_3@3@)
[4\. Release of CDS Enumerated Types](#!ABAP_MODIFICATION_4@4@)
[5\. Annotation Environment.sql.passValue, Scope Enhancement](#!ABAP_MODIFICATION_5@5@)
[6\. New Annotation Environment.sql.passValueForClient](#!ABAP_MODIFICATION_6@6@)
[7\. New Cardinality Syntax for Associations and Joins](#!ABAP_MODIFICATION_7@7@)
[8\. CDS Scalar Functions](#!ABAP_MODIFICATION_8@8@)
[9\. Extension of the CAST Matrix](#!ABAP_MODIFICATION_9@9@)
[10\. CDS Transactional Interface, WHERE Clause](#!ABAP_MODIFICATION_10@10@)
[11\. Further Operand Positions for Typed Literals](#!ABAP_MODIFICATION_11@11@)
[12\. $projection References on Path Expressions](#!ABAP_MODIFICATION_12@12@)

Modification 1   

CDS Analytical Projection View, Projected Entity

[CDS analytical projection views](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry") can now also have [analytical dimension views](javascript:call_link\('abencds_anal_dim_view_glosry.htm'\) "Glossary Entry") as [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry").

Modification 2   

@AbapCatalog.preserveKey is Obsolete

The CDS annotation @AbapCatalog.preserveKey is [obsolete](javascript:call_link\('abencds_annotation_obsolete.htm'\)) and has partly a different behavior now.

The annotation was used before release 7.58 to define the key fields of the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of an obsolete [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The annotation can be kept in existing data definitions, but it does not have an effect any more and leads to a syntax check warning. The key fields of the CDS-managed DDIC view are always defined by the addition [key](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) in the SELECT list.

The change in behavior between 7.57 and 7.58 is incompatible. The key fields of the CDS-managed DDIC view of an obsolete CDS DDIC-based view are defined differently now for views where the annotation was not specified or where it was specified with the value false. The value false was used to define the key fields of the CDS-managed DDIC view as for a DDIC database views in ABAP Dictionary, regardless of the addition KEY. It was also the standard value, when the annotation was not specified. Now, the behavior is always as for the value true.

Modification 3   

Release of CDS Simple Types

[CDS simple types](javascript:call_link\('abencds_simple_type_glosry.htm'\) "Glossary Entry") define [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") natively in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). A CDS simple type can be enriched with metadata using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The syntax statement for defining a CDS simple type is [DEFINE TYPE](javascript:call_link\('abencds_define_simple_type.htm'\)).

Modification 4   

Release of CDS Enumerated Types

[CDS enumerated types](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") define [enumerated types](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry") natively in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The syntax statement for defining a CDS enumerated type is [DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)).

CDS enumerated types can be used as follows:

-   In ABAP CDS for typing and casting, as operands in expressions, and in comparisons.
-   In ABAP for typing after the TYPES statement.
-   In ABAP SQL as elementary operands and in cast expressions.

Modification 5   

Annotation Environment.sql.passValue, Scope Enhancement

The ABAP annotation [Environment.sql.passValue](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) is now also available for [CDS parameters](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") in CDS view entities, CDS projection views, and CDS hierarchies. The annotation scope has been enhanced.

Modification 6   

New Annotation Environment.sql.passValueForClient

A new ABAP annotation is available in CDS view entities, CDS projection views, and CDS hierarchies: [Environment.sql.passValueForClient](javascript:call_link\('abencds_f1_entity_annotations.htm'\)). It works in a similar way to the annotation Environment.sql.passValue, but for client fields. It specifies whether a placeholder ? or a literal value is passed to the database in an ABAP SQL condition when the client field is compared with a host variable.

Modification 7   

New Cardinality Syntax for Associations and Joins

A new syntax for specifying the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), CDS [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry"), and of filter conditions of [CDS path expressions](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry") is now available:

*{*MANY *|* ONE *|* EXACT ONE*}* TO *{*MANY *|* ONE *|* EXACT ONE*}*

This syntax allows a [source](javascript:call_link\('abensource_cardinality_glosry.htm'\) "Glossary Entry") and a [target cardinality](javascript:call_link\('abentarget_cardinality_glosry.htm'\) "Glossary Entry") to be specified, while the previously available numeric syntax only allowed the target cardinality to be specified. The new cardinality syntax can be used to improve query performance. It is available in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry"), and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

Modification 8   

CDS Scalar Functions

The new CDS entity is available: the [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry"). It is defined using the CDS DDL statement [DEFINE SCALAR FUNCTION](javascript:call_link\('abencds_define_scalar_function.htm'\)). A CDS scalar function is linked with an AMDP function in which it is implemented using [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry").

As of this release, scalar functions are available for two different runtimes:

-   The HANA SQL runtime. SQL-based scalar functions can be created internally at SAP and externally by customers and partners.
-   The ABAP Analytical Engine. Analytical scalar functions can be created internally at SAP only. They are delivered to customers.

Modification 9   

Extension of the CAST Matrix

The matrix of types that can be converted to each other using CAST has been enhanced for [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_ddic_based_entity_glosry.htm'\) "Glossary Entry") and for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). Data types DECFLOAT16 and DECFLOAT34 can now be cast into data type CURR.

-   See topic [CDS DDL - DDIC-Based View, cast\_expr](javascript:call_link\('abencds_cast_expression_v1.htm'\)) and
-   topic [CDS DDL - CDS View Entity, cast\_expr](javascript:call_link\('abencds_cast_expression_v2.htm'\)).

Modification 10   

CDS Transactional Interface, WHERE Clause

A [WHERE](javascript:call_link\('abencds_interface_cond_expr.htm'\)) condition is now available also for [CDS transactional interfaces](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") to restrict the result set that is returned when the transactional interface is accessed.

Modification 11   

Further Operand Positions for Typed Literals

[Typed literals](javascript:call_link\('abentyped_literal_glosry.htm'\) "Glossary Entry") can now be used in more operand positions in ABAP CDS. They can now be used in the WHERE condition of [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") and in the ON condition of [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

Modification 12   

$projection References on Path Expressions

A reuse expression [$projection.Field](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) can now also be used to reuse fields selected via a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)).