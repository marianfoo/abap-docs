---
title: "IN LOCAL MODE"
description: |
  Syntax ... IN LOCAL MODE ... Effect The addition is used to exclude feature controls and authorization checks. It can be added to the following EML statements: -   READ ENTITY, ENTITIES(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm) -   MODIFY ENTITY, ENT
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm"
abapFile: "abapin_local_mode.htm"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "abapin", "local", "mode"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_in_abp.htm) → 

IN LOCAL MODE

Syntax

... IN LOCAL MODE ...

Effect

The addition is used to exclude feature controls and authorization checks. It can be added to the following EML statements:

-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm)
-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities.htm)

It can currently only be used for in RAP BO implementations for the particular RAP BO itself, i. e. not for other RAP BOs. That means IN LOCAL MODE can only be used for this RAP BO's implementations classes in the behavior pool or other classes that are called from those implementation classes (for example, legacy code or other reused logic contained elsewhere). The reused logic contained elsewhere cannot be referred to by RAP statically. In that case, a warning is displayed in [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"). Yet, at runtime, there will not be an issue if this logic is called via the implementation classes of this RAP BO. If the reused logic is not called from the implementation classes of this RAP BO or it is called indirectly, a short dump is the consequence. For example, if the logic is called from a report (the implementation class of the RAP BO is not called at all) or if, at runtime, another RAP BO is meanwhile involved.

Example use case: A field to display the booking status of a trip on an SAP Fiori UI is specified as readonly in a [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Hence, it cannot be modified by a user on the UI directly. For example, the status of a trip is set to and displayed as "not booked". A button on the UI triggers an action to book the trip. With clicking the button, the status gets changed and "booked" is displayed. To enable this, the underlying modify operation with the action to be executed in the ABP has the addition IN LOCAL MODE that ignores the feature control.

Example

The following source code section is taken from the CCIMP include of a behavior pool (the global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3). It is used in the context of the get\_instance\_features method of the executable example DEMO\_RAP\_EML\_GET\_PERMISSIONS.

READ ENTITIES OF demo\_managed\_root\_3 IN LOCAL MODE
  ENTITY demo\_managed\_root\_3
  FIELDS ( data\_field3\_root data\_field4\_root )
  WITH CORRESPONDING #( keys )
  RESULT DATA(lt\_numbers)
  FAILED DATA(failed).