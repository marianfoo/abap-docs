---
title: "METHOD, Internal Additions"
description: |
  These additions are for internal use only. Do not use them in application programs. Addition: ... ... BY KERNEL MODULE p1 ... Effect This addition to the statement METHOD defines the method meth as a kernel method(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkernel_methods.htm).
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_kernel_module_internal.htm"
abapFile: "abapmethod_kernel_module_internal.htm"
keywords: ["do", "if", "method", "class", "abapmethod", "kernel", "module", "internal"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_procedures.htm) →  [Methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_methods.htm) →  [METHOD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod.htm) → 

METHOD, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Addition:

... ... BY KERNEL MODULE p1 ...

Effect

This addition to the statement METHOD defines the method meth as a [kernel method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkernel_methods.htm). This means that the method meth is not implemented in ABAP but in the kernel instead by using one of the kernel modules p1 specified here. No statements are allowed between METHOD and ENDMETHOD.

Hint

In global classes, the addition must be entered directly in the source code editor of the Class Builder and is not listed under the properties of the method there.