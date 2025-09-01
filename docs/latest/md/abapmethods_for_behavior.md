---
title: "METHODS, FOR BEHAVIOR"
description: |
  Syntax  METHODS read   FOR BEHAVIOR ...    METHODS modify FOR BEHAVIOR ...    METHODS lock   FOR BEHAVIOR ...  Effect Obsolete declaration of ABP handler methods(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm 'Glossary Entr
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_behavior.htm"
abapFile: "abapmethods_for_behavior.htm"
keywords: ["do", "if", "try", "method", "class", "abapmethods", "for", "behavior"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Statements for RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_obsolete.htm) →  [Obsolete Elements in ABAP Behavior Pool Implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20FOR%20BEHAVIOR%2C%20ABAPMETHODS_FOR_BEHAVIOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, FOR BEHAVIOR

Syntax

  *{* METHODS read   FOR BEHAVIOR ... *}*
*|* *{* METHODS modify FOR BEHAVIOR ... *}*
*|* *{* METHODS lock   FOR BEHAVIOR ... *}*

Effect

Obsolete declaration of [ABP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") in the [handler class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). When using the addition FOR BEHAVIOR, the methods must have one of the predefined names modify, read, or lock.

Instead the following declarations should be used:

-   [METHODS meth FOR READ   ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm)
-   [METHODS meth FOR MODIFY ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm)
-   [METHODS meth FOR LOCK   ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm)

Here, the name of the method is not prescribed. The meaning of the methods is defined by the addition FOR MODIFY, FOR READ, or FOR LOCK instead.