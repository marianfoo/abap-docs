---
title: "ABAP EML - PRIVILEGED"
description: |
  The addition PRIVILEGED is used for a privileged access to a RAP BO, for example, to circumvent authority checks. The addition can only be used if the RAP BO entity is defined with with privileged mode .... See the details in the RAP BDL documentation for with privileged mode(https://help.sap.com/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_privileged.htm"
abapFile: "abapeml_privileged.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abapeml", "privileged"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommon_eml_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20PRIVILEGED%2C%20ABAPEML_PRIVILEGED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - PRIVILEGED

The addition PRIVILEGED is used for a privileged access to a RAP BO, for example, to circumvent authority checks. The addition can only be used if the RAP BO entity is defined with with privileged mode .... See the details in the RAP BDL documentation for [with privileged mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_privileged_mode.htm).

The addition is currently possible for the following ABAP EML statements:

-   Short forms
    -   [MODIFY ENTITY PRIVILEGED bdef ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_short.htm)
    -   [READ ENTITY PRIVILEGED bdef ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_short.htm)
    -   [GET PERMISSIONS PRIVILEGED ... ENTITY bdef ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions_short.htm)
-   Long forms:
    -   [MODIFY ENTITIES OF bdef PRIVILEGED ENTITY ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entities_long.htm)
    -   [READ ENTITIES OF bdef PRIVILEGED ENTITY ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_long.htm)
    -   [GET PERMISSIONS PRIVILEGED ... OF bdef ENTITY ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions_long.htm)
-   Dynamic forms:
    -   [MODIFY ENTITIES PRIVILEGED OPERATIONS ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entities_operations_dyn.htm)
    -   [READ ENTITIES PRIVILEGED OPERATIONS ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_operations.htm)
    -   [GET PERMISSIONS PRIVILEGED ... OPERATIONS ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions_dyn.htm)

Hint

Using the method get\_current\_context of class CL\_ABAP\_BEHV\_AUX, you can receive context information. Among others, you can determine if the running handler is running in privileged mode, e. g. as follows:

cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING privileged = DATA(priv) ).

Executable Example

The example [Using the Addition PRIVILEGED with an ABAP EML Statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_privileged_abexa.htm) demonstrates the addition PRIVILEGED using an [action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaction_glosry.htm "Glossary Entry") and a managed RAP BO.

Continue
![Example](exa.gif "Example") [Using the Addition PRIVILEGED with an ABAP EML Statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_privileged_abexa.htm)