---
title: "Obsolete Syntax"
description: |
  CALL CUSTOMER SUBSCREEN sub_area INCLUDING prog dynnr. Effect Like the corresponding variant of CALL SUBSCREEN(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enh
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpcall_customer_subscreen.htm"
abapFile: "dynpcall_customer_subscreen.htm"
keywords: ["do", "if", "try", "dynpcall", "customer", "subscreen"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20CALL%20CUSTOMER%20SUBSCREEN%2C%20DYNPCALL_CUSTOMER_SUBSCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - CALL CUSTOMER SUBSCREEN

Obsolete Syntax

CALL CUSTOMER SUBSCREEN sub\_area INCLUDING prog dynnr.

Effect

Like the corresponding variant of [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpcall.htm), with the difference that the subscreen dynpro is only included if it was activated in transaction CMOD as an enhancement. In addition, the program name prog must be specified as a literal and begin with SAPLX (the subscreen dynpro must be a component of a function pool beginning with X).

Hint

The execution of enhancements using transaction CMOD is now obsolete. Instead, the [ABAP Enhancement Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenhancement_framework_glosry.htm "Glossary Entry") should be used.