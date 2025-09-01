---
title: "AMDP - Inheritance"
description: |
  Both interface methods and redefined methods inherited from superclasses can become AMDP methods(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_methods.htm) in the implementation, provided that their prerequisites are met and the class contains the corresponding tag interface.
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_inheritance.htm"
abapFile: "abenamdp_inheritance.htm"
keywords: ["do", "if", "method", "class", "data", "abenamdp", "inheritance"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Inheritance, ABENAMDP_INHERITANCE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

AMDP - Inheritance

Both interface methods and redefined methods inherited from superclasses can become [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_methods.htm) in the implementation, provided that their prerequisites are met and the class contains the corresponding tag interface. If a subclass contains a tag interface, this also applies to its subclasses. If an interface contains a tag interface, this also applies to classes that implement this interface.