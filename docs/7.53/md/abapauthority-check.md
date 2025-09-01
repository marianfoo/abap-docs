---
title: "AUTHORITY-CHECK"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check_shortref.htm) Syntax AUTHORITY-CHECK OBJECT auth_obj FOR USER user ID id1 FIELD val1DUMMY ID id2 FIELD val2DUMMY ... ID id10 FIELD val10DUMMY. Addition
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm"
abapFile: "abapauthority-check.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "class", "data", "abapauthority", "check"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Authorizations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbc_authority_check.htm) → 

AUTHORITY-CHECK

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check_shortref.htm)

Syntax

AUTHORITY-CHECK OBJECT auth\_obj *\[*FOR USER user*\]*
                        ID id1 *{*FIELD val1*}**|*DUMMY
                       *\[*ID id2 *{*FIELD val2*}**|*DUMMY*\]*
                        ...
                       *\[*ID id10 *{*FIELD val10*}**|*DUMMY*\]*.

Addition:

[... FOR USER user](#!ABAP_ONE_ADD@1@)

Effect

This statement checks whether an [authorization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_glosry.htm "Glossary Entry") is entered in the [user master record](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_master_record_glosry.htm "Glossary Entry") of the current user or of the user specified in user for the [authorization object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") entered in the field auth\_obj, and whether this authorization is sufficient for the request specified in the statement. auth\_obj expects a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") character-like field containing the name of an authorization object. If the addition FOR USER is not specified, the authorization of the current user is checked.

If id1 ... id10 is specified, at least one and a maximum of 10 different authorization fields must be specified for the authorization object in question. id1 ... id10 expects flat character-like fields containing the names of the authorization fields in uppercase. If an authorization field is specified that does not appear in the authorization object, checks are not possible and sy-subrc is set to 4. Each specified authorization field expects either a value to be checked by FIELD in a flat character-like field val1 ... val10 or the addition DUMMY. The value being checked can have a maximum of 40 characters and no more than 40 places from val1 ... val10 are evaluated. Fields that are longer produce a warning from the [extended program check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry").

The authorization check is carried out if the [check indicator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheck_indicator_glosry.htm "Glossary Entry") for the specified authorization object for the current context is set to check with any proposal status. If the check indicator is set to no check, no authorization check is carried out and sy-subrc is set to 0, as with a successful check.

The authorization check is successful if one or more authorizations are created for the authorization object in the user master record and if, for at least one of the authorizations, each of the value sets defined there for the authorization fields specified using ID includes the value val1 ... val10 to be checked. Authorization fields that are not included in the statement or that have DUMMY specified for them are not checked. If the check is successful, sy-subrc is set to 0. Otherwise, it is set to a value not equal to 0 (see below).

System Fields

sy-subrc

Meaning

0

Authorization successful or no check was carried out. An authorization for the authorization object was found in the user master record. Its value sets include the specified values.

4

Authorization check not successful. One or more authorizations were found for the authorization object in the user master record and they include the value sets, but not the values specified, or incorrect authorization fields or too many fields were specified.

12

No authorization was found for the authorization object in the user master record.

24

This return code is no longer set.

40

An invalid user name was specified in user.

Notes

-   The authorization fields of an authorization object are fields for data and a field with the name ACTVT for activities. Activities are represented by IDs with two characters defined in the ACTVT column of the database table TACT or have a customer-specific definition in TACTZ. Possible activities are assigned to the authorization field ACTVT in the authorization object. The user master record, contains authorizations for data and activities in the form of operands for logical expressions stored as value sets.
    
-   When checking the authorization of the current user without the addition FOR USER, the content of the system field sy-uname is not evaluated, but the actual user name is used instead.
    
-   The most important contexts for which [check indicators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheck_indicator_glosry.htm "Glossary Entry") can be set are transactions. The execution of a statement AUTHORITY-CHECK can have different results depending on how the current program flow was started. In general, a check indicator should always been set to check.
    
-   For authorization objects of the areas AS ABAP (BC) and human resources management (HR), a check indicator cannot be set to no check.
    
-   Do not specify an authorization field of the specified authorization object more than once. If an authorization field is specified more than once, however, the check takes place as if it were dealing with different fields, that is, the specified values are checked individually.
    
-   The transaction SU53 shows the results of the last authorization check for a user.
    
-   Alongside explicit authorization checks using AUTHORITY-CHECK, there are also implicit authorization checks, for example in [program calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) or using [CDS access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry") when accessing [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry").
    
-   The documented class CL\_AUTH\_OBJECTS\_TO\_SQL enables the generation of dynamic WHERE conditions from authorization objects. When a database table is accessed, a WHERE condition of this type makes it possible to select only that data for which the current user has authorization. This may replace the use of statement AUTHORITY-CHECK, for example in a SELECT loop.
    
-   See also [Insufficient Authorization Checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthority_scrty.htm).
    

Example

Checks whether the current user has the authorization to display the airline he or she entered on the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The authorization object used here is S\_CARRID and includes the authorization fields CARRID for identifying an airline and ACTVT for the activity. The code "03" represents the activity "Display", which is one of the activities assigned to the authorization object S\_CARRID.

PARAMETERS carr TYPE spfli-carrid.
AT SELECTION-SCREEN.
  AUTHORITY-CHECK OBJECT 'S\_CARRID'
    ID 'CARRID' FIELD carr
    ID 'ACTVT'  FIELD '03'.
  IF sy-subrc <> 0.
    MESSAGE 'No authorization' TYPE 'E'.
  ENDIF.

Addition

... FOR USER user

Effect

If the addition FOR USER is specified, the authorization of the user is checked whose [user name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_name_glosry.htm "Glossary Entry") is specified in user. user expects a field of the same type as the system field sy-uname. If the user name is invalid, sy-subrc is set to 40.

Notes

-   This addition replaces the function module AUTHORITY\_CHECK.
    
-   Using the addition FOR USER produces a security risk. This addition can be misused to bypass an authorization check by specifying a user with extensive authorizations. User names passed to the program from the outside should never be specified. If this does become necessary, however, the name must be checked carefully.
    
-   The current user should not be specified explicitly using USER sy-uname. Not only is the user specified redundantly, the system field is also at risk of being overwritten, for example in ABAP Debugger.
    
-   See also [User-Specific Program Flow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_dependent_scrty.htm).