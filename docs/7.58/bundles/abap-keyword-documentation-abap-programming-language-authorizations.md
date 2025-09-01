# ABAP - Keyword Documentation / ABAP - Programming Language / Authorizations

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenbc_authority_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbc_authority_check.htm)
- [abapauthority-check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.938Z

---

### abenbc_authority_check.htm

> **📖 Official SAP Documentation**: [abenbc_authority_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbc_authority_check.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenbc_authority_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbc_authority_check.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Authorizations%2C%20ABENBC_AUTHORITY_CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

-   [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") enables [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") based on implicit evaluations of [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry").
-   During an [update](javascript:call_link\('abenauthority_during_update.htm'\)), no authorizations of the SAP authorization concept are checked.
-   These access conditions can be defined as [PFCG conditions](javascript:call_link\('abenpfcg_condition_glosry.htm'\) "Glossary Entry") based on authorizations of transaction PFCG.

Continue
[AUTHORITY-CHECK OBJECT](javascript:call_link\('abapauthority-check.htm'\))



**📖 Source**: [abenbc_authority_check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbc_authority_check.htm)

### abapauthority-check.htm

> **📖 Official SAP Documentation**: [abapauthority-check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapauthority-check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapauthority-check.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Authorizations](javascript:call_link\('abenbc_authority_check.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AUTHORITY-CHECK%20OBJECT%2C%20ABAPAUTHORITY-CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AUTHORITY-CHECK OBJECT

[Short Reference](javascript:call_link\('abapauthority-check_shortref.htm'\))

Syntax

AUTHORITY-CHECK OBJECT auth\_obj *\[*FOR USER user*\]*
                        ID id1 *{*FIELD val1*}**|*DUMMY
                       *\[*ID id2 *{*FIELD val2*}**|*DUMMY*\]*
                        ...
                       *\[*ID id10 *{*FIELD val10*}**|*DUMMY*\]*.

Addition:

[... FOR USER user](#!ABAP_ONE_ADD@1@)

Effect

This statement checks whether an [authorization](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") is entered in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") of the current user or of the user specified in user for the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") specified in auth\_obj, and whether this authorization is sufficient for the request specified in the statement. If the addition FOR USER is not specified, the authorization of the current user is checked.

auth\_obj expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like field containing the name of an authorization object in uppercase letters. The following can be specified for auth\_obj:

-   Literal or constants
    
    If the data object auth\_obj is specified as a character literal or as a constant, it can be evaluated statically, and the specified authorization object is recognized as the used object.
    
-   Variable
    
    If the data object auth\_obj is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.
    

id1 ... id10 must be used to specify at least one and a maximum of 10 different authorization fields must be specified for the authorization object in question. id1 ... id10 expects flat character-like fields containing the names of the authorization fields in uppercase letters. If an authorization field is specified that does not appear in the authorization object, checks are not possible and sy-subrc is set to 4. Each specified authorization field expects either a value to be checked by FIELD in a flat character-like field val1 ... val10 or the addition DUMMY. A value to be checked can have a maximum of 40 characters and no more than 40 places from val1 ... val10 are evaluated. Fields that are longer produce a warning from the extended program check.

The authorization check is performed if the [check indicator](javascript:call_link\('abencheck_indicator_glosry.htm'\) "Glossary Entry") for the specified authorization object for the current context is set to check with any proposal status. If the check indicator is set to no check, no authorization check is performed and sy-subrc is set to 0, as with a successful check.

The authorization check is successful if one or more authorizations are created for the authorization object in the user master record and if, for at least one of the authorizations, each of the value sets defined there for the authorization fields specified using ID includes the value val1 ... val10 to be checked. Authorization fields that are not listed in the statement or for which DUMMY is specified are not checked. If the check is successful, sy-subrc is set to 0. Otherwise, it is set to a value not equal to 0 (see below).

System Fields

sy-subrc

Meaning

0

Authorization check successful or no check was performed. An authorization for the authorization object was found in the user master record. Its value sets include the specified values.

4

Authorization check not successful. One or more authorizations were found for the authorization object in the user master record and they include the value sets, but not the values specified, or incorrect authorization fields or too many fields were specified.

12

No authorization was found for the authorization object in the user master record.

24

This return code is no longer set.

40

An invalid user name was specified in user.

During [updates](javascript:call_link\('abenauthority_during_update.htm'\)), the statement AUTHORITY-CHECK always sets the value sy-subrc to 0 and does not perform an authorization check.

Hints

-   The authorization fields of an authorization object are fields for data and a field with the name ACTVT for activities. Activities are represented by identifiers with two characters defined in the ACTVT column of the DDIC database table TACT or have a customer-specific definition in TACTZ. Possible activities are assigned to the authorization field ACTVT in the authorization object. The user master record contains authorizations for data and activities in the form of operands for logical expressions stored as value sets.
-   When checking the authorization of the current user without the addition FOR USER, the content of the system field sy-uname is not evaluated, but the actual user name is used instead.
-   The most important contexts for which [check indicators](javascript:call_link\('abencheck_indicator_glosry.htm'\) "Glossary Entry") can be set are transactions. The execution of a statement AUTHORITY-CHECK can have different results depending on how the current program flow was started. In general, a check indicator should always been set to check.
-   For authorization objects of the areas AS ABAP (BC) and human resources management (HR), a check indicator cannot be set to no check.
-   An authorization field of the specified authorization object should not be specified more than once. If an authorization field is specified multiple times, the check takes place as if it were dealing with different fields. This means all specified values must be contained in one authorization.
-   When DUMMY is specified for all authorization fields, the statement AUTHORITY-CHECK returns either 0 or 12 in sy-subrc:
    -   It returns 0 if at least one authorization exists for the authorization object in the user master record. This is independent from the value sets defined in the authorizations.
    -   It returns 12 if no authorization exists for the authorization object in the user master record.
-   The transaction SU53 displays the results of the last authorization check for a user.
-   The documented class CL\_AUTH\_OBJECTS\_TO\_SQL enables the generation of dynamic WHERE conditions for ABAP SQL from authorization objects. When a DDIC database table is accessed, a WHERE condition of this type makes it possible to select only that data for which the current user has authorization. This may replace the use of statement AUTHORITY-CHECK, for example in a SELECT loop.
-   In addition to explicit authorization checks using AUTHORITY-CHECK, there are also implicit authorization checks, for example using [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") when accessing [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").
-   Another example for explicit authority checks are [program calls](javascript:call_link\('abenabap_program_call.htm'\)).
-   See also [Insufficient Authorization Checks](javascript:call_link\('abenauthority_scrty.htm'\)).

Example

Checks whether the current user has the authorization to display the airline entered as an input. The authorization object used here is S\_CARRID and includes the authorization fields CARRID for identifying an airline and ACTVT for the activity. The code 03 represents the activity Display, which is one of the activities assigned to the authorization object S\_CARRID.

DATA carr TYPE spfli-carrid.
cl\_demo\_input=>request( CHANGING field = carr ).
AUTHORITY-CHECK OBJECT 'S\_CARRID'
    ID 'CARRID' FIELD carr
    ID 'ACTVT'  FIELD '03'.
IF sy-subrc <> 0.
  cl\_demo\_output=>display( 'No authorization' ).
  RETURN.
ENDIF.

Addition   

... FOR USER user

Effect

If the addition FOR USER is specified, the authorization of the user is checked whose [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry") is specified in user. user expects a field of the same type as the system field sy-uname. If the user name is invalid, sy-subrc is set to 40.

Hints

-   This addition replaces the function module AUTHORITY\_CHECK.
-   Using the addition FOR USER produces a security risk. This addition can be misused to bypass an authorization check by specifying a user with extensive authorizations. User names passed to the program from the outside should never be specified. If this is necessary, however, the name must be checked carefully.
-   The current user should not be specified explicitly using USER sy-uname. Not only is the user specification redundant, the system field is also at risk of being overwritten, for example in the ABAP Debugger.
-   See also [User-Specific Program Flow](javascript:call_link\('abenuser_dependent_scrty.htm'\)).
-   There is a [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry")\-specific version of the statement available: [AUTHORITY-CHECK DISABLE](javascript:call_link\('abapauthority-check_disable.htm'\)).
