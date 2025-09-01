---
title: "BAdI interface"
description: |
  A BAdI interface is a global interface(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_oo_glosry.htm 'Glossary Entry') that integrates the tag interface(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentag_interface_glosry.htm 'Glossary Entry') IF_BADI_IN
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_interface_glosry.htm"
abapFile: "abenbadi_interface_glosry.htm"
keywords: ["do", "if", "try", "method", "abenbadi", "interface", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

BAdI interface

A BAdI interface is a global [interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_oo_glosry.htm "Glossary Entry") that integrates the [tag interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_BADI\_INTERFACE. A BAdI interface can be used as a part of the definition of one or more [BAdIs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_glosry.htm "Glossary Entry"), and may only contain [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_glosry.htm "Glossary Entry") ([BAdI methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_method_glosry.htm "Glossary Entry")) and [events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_glosry.htm "Glossary Entry"), but not variable [attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenattribute_glosry.htm "Glossary Entry"). In addition, a BAdI interface cannot contain any [component interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomponent_interface_glosry.htm "Glossary Entry") apart from other BAdI interfaces. An interface that integrates a BAdI interface is also a BAdI interface.