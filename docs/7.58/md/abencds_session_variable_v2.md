  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20session_variable%2C%20ABENCDS_SESSION_VARIABLE_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - CDS View Entity, session\_variable

Syntax

... $session.vname ...

Effect

Specifies a [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm "Glossary Entry") vname in an operand position in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The variable must be prefixed by $session.. The prefix and the variable are case-sensitive. $session.vname, $Session.Vname, and $SESSION.VNAME can all be used. No other spellings are allowed.

There are two types of session variables available:

-   [Built-in session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_var_builtin_v2.htm): Built-in session variables are set to their value when a CDS view entity is used in ABAP SQL. They cannot be set or changed from ABAP programs. The following built-in session variables are currently available: user, client, system\_language, system\_date, user\_timezone, user\_date.
-   [Application session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_var_application_v2.htm): Application session variables are required for specific applications and they are set by dedicated system programs. The following application session variables are currently available: bs\_instance\_id, bs\_zone\_id.

Hint

From a technical perspective, session variables indicate global variables of the current database and can be compared to [ABAP system fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm). Although application session variables can be changed from ABAP programs, outside of system programs they should only be used for reads.

Continue
[CDS DDL - CDS View Entity, Built-In Session Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_var_builtin_v2.htm)
[CDS DDL - CDS View Entity, Application Session Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_var_application_v2.htm)