---
title: "CALL CUSTOMER SUBSCREEN"
description: |
  Obsolete Syntax CALL CUSTOMER SUBSCREEN sub_area INCLUDING prog dynnr. Effect Like the corresonding variant of CALL SUBSCREEN(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transaction
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpcall_customer_subscreen.htm"
abapFile: "dynpcall_customer_subscreen.htm"
keywords: ["do", "if", "try", "dynpcall", "customer", "subscreen"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengui_obsolete.htm) →  [Obsolete statements of the screen flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_obsolet.htm) → 

CALL CUSTOMER SUBSCREEN

Obsolete Syntax

CALL CUSTOMER SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

Like the corresonding variant of [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enhancement. In addition, the program name prog must be specified as a literal and begin with SAPLX (the subscreen dynpro must be a component of a function group beginning with "X").

Note

The execution of enhancements using transaction CMOD is now obsolete. Instead, you should use the new [enhancement concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenhancement_concept_glosry.htm "Glossary Entry").