  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP EML - Providing RAP BOs](javascript:call_link\('abeneml_in_abp.htm'\)) →  [ABAP EML - AUTHORITY-CHECK DISABLE](javascript:call_link\('abapauthority-check_disable.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20AUTHORITY-CHECK%20DISABLE%2C%20ABENEML_AUTH_CHECK_DISABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ABAP EML - AUTHORITY-CHECK DISABLE

This example demonstrates the ABAP EML statement AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. with an unmanaged RAP business object.

Data model

The CDS data model consists of the root entity DEMO\_UNMANAGED\_AUTH:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_UNMANAGED\_AUTH
as select from demo\_tab\_root\_7 {
  key key\_field,
  char1,
  char2,
  num1,
  num2
}

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_UNMANAGED\_AUTH is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_unmanaged\_auth unique;
strict(2);
define authorization context ac1
{
  'AUTHOBJ1';
}
define authorization context ac2
for disable ( read )
{
  'AUTHOBJ2';
}
define behavior for DEMO\_UNMANAGED\_AUTH
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly ) key\_field;
}

Behavior implementation

For the above BDEF, one [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_AUTH. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The [handler methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) do not contain any implementations. To demonstrate the statement AUTHORITY-CHECK DISABLE, multiple [AUTHORITY-CHECK OBJECT](javascript:call_link\('abapauthority-check.htm'\)) statements are included in the read method that check the authorization. One of these statements is inside an AUTHORITY-CHECK DISABLE statement. An internal table that is declared in the global class is filled to log sy-subrc values that are returned by the individual AUTHORITY-CHECK OBJECT statements.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_auth\_check\_disable DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_auth\_check\_disable IMPLEMENTATION.
  METHOD main.
    READ ENTITY demo\_unmanaged\_auth
      FROM VALUE #( ( key\_field = 1 ) )
      RESULT FINAL(res).
    out->begin\_section( \`Demo for AUTHORITY-CHECK DISABLE\`
      )->write( bp\_demo\_unmanaged\_auth=>itab ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_7.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP class:

A [RAP read operation](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry") is carried out.

As shown above, the BDEF defines two [RAP authorization contexts](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") using the demo authorization objects AUTHOBJ1 and AUTHOBJ2. For AUTHOBJ2, an authority check is disabled for read.

The output shows the entries of an internal which demonstrates the effect of the AUTHORITY-CHECK DISABLE statements that are implemented in the local class of the behavior pool. When an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement is used, the field EML\_STMNT\_USED is flagged. When an authorization context is activated, authority checks for the associated authorization objects are always successful and the returned value for sy-subrc is 0. See more information on the sy-subrc values returned by AUTHORITY-CHECK OBJECT statements in the [ABAP Keyword Documentation](javascript:call_link\('abapauthority-check.htm'\)).

Table entries:

-   The first two entries show the sy-subrc values returned by AUTHORITY-CHECK OBJECT statements that are used with the respective authorization objects. sy-subrc is only 0 for AUTHOBJ2 because the authorization context is defined with the addition ... for disable ( read ) in the BDEF which shows that the AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END is implicitly wrapped around this authorization context. This is not true for the authorization context ac1.
-   The third entry shows the effect of AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement which is used for the authorization context ac1. An AUTHORITY-CHECK OBJECT statement that is used within an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement has the effect that the sy-subrc value shows 0 indicating that the authorization context is disabled.
-   Note that putting the authorization context ac2 inside an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement is irrelevant because it is implicitly there due to the BDEF specification.