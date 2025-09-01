  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Authorizations, ABENBC_AUTHORITY_CHECK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Authorizations

Authorizations are a method used to protect functions or objects within an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). The programmer of a function determines where authorizations are checked and how. The user administrator determines which users can execute a function or access an object.

The following terms are central to the SAP authorization concept:

Authorization Field   

Smallest unit of an authorization object. An authorization field either represents data, such as a key field of a database table, or activities, such as Read or Change. Activities are specified as IDs, which are stored in the database table TACT and the customer-specific table TACTZ.

They are maintained in transaction SU20.

Authorization Object   

A [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") on which authorizations are based. An authorization object consists of up to 10 authorization fields. Combinations of authorization fields, which represent data and activities, are used to grant and check authorizations. Authorization objects are grouped together organizationally in authorization object classes.

They are maintained in transaction SU21.

Authorization   

An entry in the user master record as part of an authorization profile. An authorization consists of complete or generic values for the authorization fields of an authorization object. The combination determines which activities a user can use to access certain data.

They are generated from transaction PFCG (profile generator for role maintenance). They can also be displayed using transaction SU03.

Authorization Profile   

A combination of multiple authorizations. Multiple authorization profiles can be assigned to a single authorization. Authorizations are assigned to users by specifying authorization profiles in the user master record.

They are generated from transaction PFCG (profile generator for role maintenance). They can also be displayed using transaction SU02.

User Master Record   

A user master record must exist before a user can log on to an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). The master record determines which actions users are allowed to execute and which authorizations they are assigned. Default settings, such as the format in which decimal places are displayed in lists, are also stored in the user master record. An authorization profile can be assigned to users as often as required.

They are maintained in transaction SU01.

Authorization Check   

A check to determine whether the current user of a program has a certain authorization. The check compares a value with the corresponding entries for each authorization field of an authorization object in the user master record. [Check indicators](javascript:call_link\('abencheck_indicator_glosry.htm'\) "Glossary Entry") control whether an authorization check is performed.

Authorization checks are made explicitly using the ABAP statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) or implicitly.

Implicit authorization checks are made, for example, when starting transactions by entering the transaction code in the command field of the SAP GUI or in statements such as [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) or [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

Authorization Assignment   

The entry of authorization profiles in the user master record.

Composite Profiles   

Composite profiles were used before the profile generator for role maintenance (transaction PFCG) was introduced in manual maintenance of profiles (transaction SU02) to organize the authorization structure. They are not, however, absolutely necessary. An authorization profile can be assigned to composite profiles as often as required.

Hints

-   During an [update](javascript:call_link\('abenauthority_during_update.htm'\)), no authorizations of the SAP authorization concept are checked.
-   [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") enables [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") based on implicit evaluations of [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry"). These access conditions can be defined as [PFCG conditions](javascript:call_link\('abenpfcg_condition_glosry.htm'\) "Glossary Entry") based on authorizations of transaction PFCG.

Continue
[AUTHORITY-CHECK OBJECT](javascript:call_link\('abapauthority-check.htm'\))