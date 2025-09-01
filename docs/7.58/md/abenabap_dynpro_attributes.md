---
title: "Attribute"
description: |
  Details Program The name of the ABAP program (executable program, module pool, or function group) to which the dynpro belongs. Dynpro number A four-digit number, unique within the ABAP program, that identifies the dynpro within the program. If a program contains selection screens, the dynpro numbers
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_attributes.htm"
abapFile: "abenabap_dynpro_attributes.htm"
keywords: ["select", "do", "while", "if", "data", "abenabap", "dynpro", "attributes"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Attributes%2C%20ABENABAP_DYNPRO_ATTRIBUTES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Attributes

Like all objects in the repository, dynpros have attributes that both describe them and determine how they behave at runtime. The following are important dynpro attributes in ABAP programming:

Attribute

Details

Program

The name of the ABAP program (executable program, module pool, or function group) to which the dynpro belongs.

Dynpro number

A four-digit number, unique within the ABAP program, that identifies the dynpro within the program. If a program contains selection screens, the dynpro numbers of selection screens and Screen Painter dynpros both use the same namespace. For example, if a program has a standard selection screen, no further dynpros with the number 1000 can be created. Lists, on the other hand, have their own namespace.

Dynpro type

A regular dynpro occupies a whole GUI window.
Modal dialog boxes only cover a part of a GUI window. Their interface elements are also arranged differently. - Selection screen dynpros are generated automatically from the definition in the ABAP program. They cannot be generated using Screen Painter.
A subscreen is a dynpro that can be displayed in a subscreen area on a different dynpro in the same ABAP program.

Next dynpro

Statically defined dynpro number, specifying the next dynpro in the sequence. Zero or leaving the field blank defines the current dynpro as the last in the chain. If the next dynpro number is the same as the current dynpro, the dynpro keeps on calling itself. The static next dynpro can be overridden dynamically in the ABAP program.

Cursor position

Static definition of the screen element on which the cursor is positioned when the screen is displayed. By default, the cursor appears on the first input field. The static cursor position can be overridden dynamically in the ABAP program.

Screen group

Four-character ID, placed in the system field sy-dyngr while the dynpro is being processed. This makes it possible to assign multiple dynpros to a common screen group. This is required, for example, to modify all of the screens in the group in a uniform way. Screen groups are stored in table TFAWT.

Holding data

If a user calls the dynpro more than once during a user session, he or she can retain changed data as default values by choosing System → User Profile → Hold Data.