---
title: "Authorizations"
description: |
  Authorizations are a method used to protect functions or objects in AS ABAP(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm 'Glossary Entry'). The programmer of a function determines where authorizations are checked and how. The user administrator determines w
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbc_authority_check.htm"
abapFile: "abenbc_authority_check.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenbc", "authority", "check"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) → 

Authorizations

Authorizations are a method used to protect functions or objects in [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). The programmer of a function determines where authorizations are checked and how. The user administrator determines which users can execute a function or access an object.

The following terms are central to the SAP authorization concept:

Authorization Field

Smallest unit in an authorization object. An authorization field either represents data, such as a key field in a database table, or activities, such as Read or Create. Activities are specified as IDs, which are stored in the database table TACT and the customer-specific table TACTZ.

They are edited in transaction SU20.

Authorization Object

A [repository object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_object_glosry.htm "Glossary Entry") on which authorizations are based. An authorization object consists of up to 10 authorization fields. Combinations of authorization fields, which represent data and activities, are used to grant and check authorizations. Authorization objects are grouped together in authorization object classes.

They are edited in transaction SU21.

Authorization

An entry in the user master record as part of an authorization profile. An authorization consists of full or generic values for the authorization fields in an authorization object. The combination determines which activities a user can use to access certain data.

They are generated from transaction PFCG (profile generator for role editing). They can also be displayed using transaction SU03.

Authorization Profile

A combination of multiple authorizations. Multiple authorization profiles can be assigned to a single authorization. Authorizations are assigned to users by specifying authorization profiles in the user master record.

They are generated from transaction PFCG (profile generator for role editing). They can also be displayed using transaction SU02.

User Master Record

A user master record must exist before a user can log on to an [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). The master record determines which actions users are allowed to execute and which authorizations they are assigned. Default settings, such as the format in which decimal places are displayed in lists, are also stored in the user master record. An authorization profile can be assigned to users any number of times.

They are edited in transaction SU01.

Authorization Check

A check to determine whether the current user of a program has a certain authorization. The check compares a value with the corresponding entries in each authorization field in an authorization object in the user master record. [Check indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheck_indicator_glosry.htm "Glossary Entry")s control whether an authorization check is performed.

Authorization checks are made explicitly using the ABAP statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapauthority-check.htm) or implicitly.

Implicit authorization checks are made, for example, when starting transactions by entering the transaction code in the command field in SAP GUI or in statements such as [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_transaction.htm) or [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm).

Authorization Assignment

The entry of authorizations in the user master record.

Composite Profiles

Composite profiles were used (before the profile generator (transaction PFCG) was introduced) in manual editing of profiles (transaction SU02) to organize the authorization structure. They are not, however, always necessary. An authorization profile can be assigned to composite profiles any number of times.

Note

[ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") enables [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") based on implicit evaluations of [access conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaccess_condition_glosry.htm "Glossary Entry").

These access conditions can be defined as [PFCG conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpfcg_condition_glosry.htm "Glossary Entry") based on authorizations in transaction PFCG.

Continue
[AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapauthority-check.htm)