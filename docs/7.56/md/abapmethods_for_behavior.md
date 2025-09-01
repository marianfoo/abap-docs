---
title: "METHODS, FOR BEHAVIOR"
description: |
  Syntax  METHODS read   FOR BEHAVIOR ...    METHODS modify FOR BEHAVIOR ...    METHODS lock   FOR BEHAVIOR ...  Effect Obsolete declaration of ABP handler methods(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm 'Glossary Entry') i
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_behavior.htm"
abapFile: "abapmethods_for_behavior.htm"
keywords: ["do", "if", "try", "method", "class", "abapmethods", "for", "behavior"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Statements for RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_obsolete.htm) →  [Obsolete ABP Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_obsolete.htm) → 

METHODS, FOR BEHAVIOR

Syntax

  *{* METHODS read   FOR BEHAVIOR ... *}*
*|* *{* METHODS modify FOR BEHAVIOR ... *}*
*|* *{* METHODS lock   FOR BEHAVIOR ... *}*

Effect

Obsolete declaration of [ABP handler methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") in the [handler class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). When using the addition FOR BEHAVIOR, the methods must have one of the predefined names modify, read, or lock.

Instead the following declarations should be used:

-   [METHODS meth FOR READ   ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm)
-   [METHODS meth FOR MODIFY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm)
-   [METHODS meth FOR LOCK   ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm)

Here, the name of the method is not prescribed. The meaning of the methods is defined by the addition FOR MODIFY, FOR READ, or FOR LOCK instead.