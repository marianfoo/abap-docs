  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_v2.htm) →  [CDS DDL - CDS View Entity, session\_variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Application%20Session%20Variables%2C%20ABENCDS_SESSION_VAR_APPLICATION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - CDS View Entity, Application Session Variables

Syntax

... $session.vname ...

Effect

Specifies an application [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry") vname in an operand position in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The variable must be prefixed by $session..

Application session variables are required for specific applications and they can be set by dedicated system programs using a special system class. The following application session variables exist:

vname

Value when accessed

bs\_instance\_id

Instance ID of the current business service instance. The returned value has the data type SSTRING.

bs\_zone\_id

Zone ID of the current business service instance. The returned value has the data type SSTRING.

Prerequisite

A CDS view entity that accesses an application session variable must be usable as [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm). That implies that the respective CDS view entity must not have any [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v2.htm).

Hints

-   From a technical perspective, session variables indicate global variables of the current database. Application session variables are set to their value by dedicated system programs using a special system class. Like [ABAP system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm), they are modifiable from an ABAP program. However, they should not be changed in application programs. They should only be used for reads. Otherwise, important information for further program execution may be lost.
-   The annotation [environment.systemField](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm) is relevant for built-in session variables, but not for application session variables.
-   In existing CDS view entities without corresponding input parameters, session variables can be passed to the input parameters of CDS view entities or CDS table functions used there.
-   Application session variables are supported only in CDS view entities. However, it is possible to build a CDS DDIC-based view (obsolete) on top of a CDS view entity with application session variables. The information is passed on to the CDS DDIC-based view (obsolete) in this case.

Restrictions

-   CDS view entities with application session variables cannot be used in [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry"), since AMDP does not support application session variables.
-   The [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") function Data Preview does not work for CDS view entities with application session variables.