  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) → 

GET PERMISSIONS, only\_clause

Syntax

... ONLY *{* GLOBAL
         *|* GLOBAL FEATURES
         *|* GLOBAL AUTHORIZATION
         *|* INSTANCE
         *|* INSTANCE FEATURES
         *|* INSTANCE AUTHORIZATION
         *|* FEATURES
         *|* AUTHORIZATION
         *|* dyn\_spec *}* ...

Effect

The only\_clause allows to specify which control characteristics (instance/global and features/authorization aspects) are to be included in the result of a GET PERMISSIONS statement.

Variants

The following table shows all the variants for only\_clause.

Note: For consolidating and interpreting the permission results, see the topic [GET PERMISSIONS, Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_rules.htm).

Variant

Details

ONLY GLOBAL

Includes only the global authorization, global and static feature control in the result. In the subsequent syntax, FROM keys is not allowed.

ONLY GLOBAL FEATURES

Includes only global and static feature control in the result. In the subsequent syntax, FROM keys is not allowed.

ONLY GLOBAL AUTHORIZATION

Includes only global authorization in the result. In the subsequent syntax, FROM keys is not allowed.

ONLY INSTANCE

Includes only instance-based authorization and instance-based feature control in the result. Note that the result also includes static features.

ONLY INSTANCE FEATURES

Includes only instance-based feature control in the result. Note that the result also includes static features.

ONLY INSTANCE AUTHORIZATION

Includes only instance-based authorization in the result.

ONLY FEATURES

Includes only global, static and instance-based feature control in the result.

ONLY AUTHORIZATION

Includes only global and instance-based authorization in the result (but neither global nor instance-based feature control).

ONLY dyn\_spec

Specifies any of above variants dynamically using an enumeration value of type T\_PERMISSIONS\_ONLY of interface IF\_ABAP\_BEHV.

Hints

-   In the subsequent syntax, FROM keys must not be specified if any of the ONLY GLOBAL ... variants are used. For all other ONLY clauses, FROM keys is required.
-   If no only\_clause is specified, all aspects, that is, global- and instance-based feature control as well as global- and instance-based authorization, are included.

Example

The following source code sections taken from DEMO\_RAP\_EML\_GET\_PERM\_ONLY demonstrate the variants of the only\_clause.

DATA: request TYPE STRUCTURE FOR
        PERMISSIONS REQUEST demo\_managed\_root\_3.
request = VALUE #(
    %create                 = if\_abap\_behv=>mk-on
    %update                 = if\_abap\_behv=>mk-on
    %delete                 = if\_abap\_behv=>mk-on
    %field-key\_field        = if\_abap\_behv=>mk-on
    %field-data\_field1\_root = if\_abap\_behv=>mk-on
    %field-data\_field2\_root = if\_abap\_behv=>mk-on
    %field-data\_field3\_root = if\_abap\_behv=>mk-on
    %field-data\_field4\_root = if\_abap\_behv=>mk-on
            ).
GET PERMISSIONS ONLY GLOBAL ENTITY demo\_managed\_root\_3
     REQUEST request
     RESULT DATA(result1)
     FAILED DATA(failed1)
     REPORTED DATA(reported1).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY GLOBAL FEATURES ENTITY demo\_managed\_root\_3
  REQUEST request
  RESULT DATA(result2)
  FAILED DATA(failed2)
  REPORTED DATA(reported2).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY GLOBAL AUTHORIZATION
      ENTITY demo\_managed\_root\_3
      REQUEST request
      RESULT DATA(result3)
      FAILED DATA(failed3)
      REPORTED DATA(reported3).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY INSTANCE ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST request
      RESULT DATA(result4)
      FAILED DATA(failed4)
      REPORTED DATA(reported4).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY INSTANCE FEATURES ENTITY demo\_managed\_root\_3
  FROM VALUE #( ( %key-key\_field = 1 )
                ( %key-key\_field = 2 ) )
  REQUEST request
  RESULT DATA(result5)
  FAILED DATA(failed5)
  REPORTED DATA(reported5).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY INSTANCE AUTHORIZATION
  ENTITY demo\_managed\_root\_3
  FROM VALUE #( ( %key-key\_field = 1 )
                ( %key-key\_field = 2 ) )
  REQUEST request
  RESULT DATA(result6)
  FAILED DATA(failed6)
  REPORTED DATA(reported6).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY FEATURES ENTITY demo\_managed\_root\_3
  FROM VALUE #( ( %key-key\_field = 1 )
                ( %key-key\_field = 2 ) )
  REQUEST request
  RESULT DATA(result7)
  FAILED DATA(failed7)
  REPORTED DATA(reported7).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY AUTHORIZATION ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST request
      RESULT DATA(result8)
      FAILED DATA(failed8)
      REPORTED DATA(reported8).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GET PERMISSIONS ONLY (if\_abap\_behv=>permissions\_only-authorization)
     ENTITY demo\_managed\_root\_3
     FROM VALUE #( ( %key-key\_field = 1 )
                   ( %key-key\_field = 2 ) )
     REQUEST request
     RESULT DATA(result9)
     FAILED DATA(failed9)
     REPORTED DATA(reported9).

Executable Example

-   The example [ABAP EML - GET PERMISSIONS, only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenget_perm_only_abexa.htm) demonstrates the different variants of the only\_clause with a simple managed RAP BO.
-   The example [ABAP EML - RAP Calculator (Unmanaged)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_calculator_abexa.htm) demonstrates a GET PERMISSIONS statement using only\_clause ONLY INSTANCE FEATURES with a simple unmanaged RAP BO. In this case, permissions are requested to determine a calculation based on entries provided is possible or not. For example, it is disallowed if a division by 0 were to be executed.