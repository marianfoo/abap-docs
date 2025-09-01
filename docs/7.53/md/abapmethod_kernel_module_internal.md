---
title: "METHOD - Internal Additions"
description: |
  Internal Additions These additions are for internal use only. Do not use them in application programs. Addition: ... ... BY KERNEL MODULE p1 ... Effect This addition of the statement METHOD defines the method meth as a kernel method(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenke
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_kernel_module_internal.htm"
abapFile: "abapmethod_kernel_module_internal.htm"
keywords: ["do", "if", "method", "class", "abapmethod", "kernel", "module", "internal"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_procedures.htm) →  [Methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_methods.htm) →  [METHOD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod.htm) → 

METHOD - Internal Additions

Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Addition:

... ... BY KERNEL MODULE p1 ...

Effect

This addition of the statement METHOD defines the method meth as a [kernel method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkernel_methods.htm). This means that the method meth is not implemented in ABAP but in the kernel instead by using one of the kernel modules p1 specified here. No statements are allowed between METHOD and ENDMETHOD.

Note

In global classes, the addition must be entered directly in the source code editor in Class Builder and is not specified under the properties of the method there.