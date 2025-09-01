---
title: "AMDP - Inheritance"
description: |
  Both interface methods and redefined methods inherited from superclasses can become AMDP methods(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_methods.htm) in the implementation, provided that their prerequisites are met and the class contains the appropriate tag interface. I
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_inheritance.htm"
abapFile: "abenamdp_inheritance.htm"
keywords: ["do", "if", "method", "class", "data", "abenamdp", "inheritance"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) → 

AMDP - Inheritance

Both interface methods and redefined methods inherited from superclasses can become [AMDP methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_methods.htm) in the implementation, provided that their prerequisites are met and the class contains the appropriate tag interface. If a subclass contains a tag interface, this also applies to its subclasses. If an interface contains a tag interface, this also applies to classes that implement this interface.