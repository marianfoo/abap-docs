---
title: "BAdI interface"
description: |
  A BAdI interface is a global interface(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_oo_glosry.htm 'Glossary Entry') that integrates the (https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm 'Glossary Entry')tag interface(https://help.sap.
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_interface_glosry.htm"
abapFile: "abenbadi_interface_glosry.htm"
keywords: ["do", "if", "try", "method", "abenbadi", "interface", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

BAdI interface

A BAdI interface is a global [interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_oo_glosry.htm "Glossary Entry") that integrates the [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry")[tag interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_BADI\_INTERFACE. A BAdI interface can be used as a part of the definition of one or more [BAdIs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_glosry.htm "Glossary Entry"), and may only contain [methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry") ([BAdI methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_method_glosry.htm "Glossary Entry")) and [events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_glosry.htm "Glossary Entry"), but not variable [attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenattribute_glosry.htm "Glossary Entry"). Furthermore, a BAdI interface cannot contain other [component interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponent_interface_glosry.htm "Glossary Entry") (except for other BAdI interfaces). An interface that contains a BAdI interface is also a BAdI interface.