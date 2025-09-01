  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20PERMISSIONS%20OPERATIONS%2C%20Dynamic%20Form%2C%20ABAPGET_PERMISSIONS_DYN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

GET PERMISSIONS OPERATIONS, Dynamic Form

Syntax

GET PERMISSIONS *\[* [only\_clause](javascript:call_link\('abapget_permissions_only_clause.htm'\))*\]* OPERATIONS perm\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Additions:

[1\. ... PRIVILEGED ...](#!ABAP_ADDITION_1@1@)
[2\. ... only\_clause ...](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The dynamic version of the GET PERMISSIONS statement collects permission queries for multiple RAP BO entities in one GET PERMISSIONS statement.

perm\_tab must be an internal table of type ABP\_BEHV\_PERMISSIONS\_TAB. This table has specific components:

Component

Details

entity\_name

Specifies the name of the BO entity for which the permissions are requested. The entry for entity\_name must be of type ABP\_ENTITY\_NAME. If the name is specified directly using a character literal, it must be provided using capital letters. It is a mandatory component.

instances

The specification is optional. It is only relevant for getting the permission information on an instance level. The name must be provided using capital letters. The entry for instances must be a reference variable [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") DATA.

request

Specifies the REQUEST parameter. It is a mandatory component that must be a reference variable with the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") DATA.

results

Specifies the RESULT parameter. It is a mandatory component that must be a reference variable with the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") DATA.
Note: See the [Guidelines](javascript:call_link\('abapget_permissions_rules.htm'\)) for information on how the components of the permissions result are handled.

Addition 1   

... PRIVILEGED

Effect

The addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 2   

... only\_clause ...

Effect

The addition [only\_clause](javascript:call_link\('abapget_permissions_only_clause.htm'\)) allows the control characteristics to be specified that are to be included in the result.

Addition 3   

... response\_param.

Effect

The addition response\_param represents the response parameters that can be specified. When used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_GET\_PERMISSION demonstrates the dynamic form of the GET PERMISSIONS statement in the context of checking access restrictions for certain data fields.

"Root entity components for perm\_tab.
DATA: lt\_perm\_key\_root TYPE TABLE FOR
        PERMISSIONS KEY demo\_managed\_root\_3,
      ls\_perm\_req\_root TYPE STRUCTURE FOR
        PERMISSIONS REQUEST demo\_managed\_root\_3,
      ls\_perm\_res\_root TYPE STRUCTURE FOR
        PERMISSIONS RESULT demo\_managed\_root\_3.
lt\_perm\_key\_root = VALUE #( ( %key-key\_field = 5 )
                            ( %key-key\_field = 6 ) ).
ls\_perm\_req\_root = VALUE #(
                    %field-data\_field1\_root = if\_abap\_behv=>mk-on
                    %field-data\_field2\_root = if\_abap\_behv=>mk-on
                          ).
ls\_perm\_res\_root = VALUE #( ).
"Child entity components for perm\_tab.
DATA: lt\_perm\_key\_child TYPE TABLE
        FOR PERMISSIONS KEY demo\_managed\_child\_3,
      ls\_perm\_req\_child TYPE STRUCTURE
        FOR PERMISSIONS REQUEST demo\_managed\_child\_3,
      ls\_perm\_res\_child TYPE STRUCTURE
        FOR PERMISSIONS RESULT demo\_managed\_child\_3.
lt\_perm\_key\_child = VALUE #( ( %key-key\_field = 5 )
                             ( %key-key\_field = 6 ) ).
ls\_perm\_req\_child = VALUE #(
                     %field-data\_field1\_child = if\_abap\_behv=>mk-on
                     %field-data\_field2\_child = if\_abap\_behv=>mk-on
                           ).
ls\_perm\_res\_child = VALUE #( ).
DATA:
perm\_tab TYPE abp\_behv\_permissions\_tab.
perm\_tab = VALUE #( ( entity\_name = 'DEMO\_MANAGED\_ROOT\_3'
                      instances   = REF data( lt\_perm\_key\_root )
                      request     = REF data( ls\_perm\_req\_root )
                      results     = REF data( ls\_perm\_res\_root ) )
                    ( entity\_name = 'DEMO\_MANAGED\_CHILD\_3'
                      instances   = REF data( lt\_perm\_key\_child )
                      request     = REF data( ls\_perm\_req\_child )
                      results     = REF data( ls\_perm\_res\_child ) )
                    ).
GET PERMISSIONS ONLY INSTANCE FEATURES OPERATIONS perm\_tab
    FAILED FINAL(failed)
    REPORTED FINAL(reported).

Executable Example

-   The example [ABAP EML - GET PERMISSIONS, Variants](javascript:call_link\('abenget_perm_forms_abexa.htm'\)) demonstrates the dynamic form of the GET PERMISSIONS statement with a simple managed RAP BO. It also includes the short and long form.