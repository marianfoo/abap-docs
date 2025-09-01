  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [LOOP AT SCREEN](javascript:call_link\('abaploop_at_screen.htm'\)) → 

The Structure SCREEN

Most components of the structure SCREEN from ABAP Dictionary correspond to the attributes of a screen element on a dynpro.

Data objects with the data type SCREEN can be used as a work area in the following ABAP statements:

-   in [LOOP AT SCREEN](javascript:call_link\('abaploop_at_screen.htm'\)), to read the screen element properties of a dynpro,

-   in [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)), to modify the screen element properties of a dynpro.

The following table shows the components of SCREEN, their assignment to the field properties in the dynpro, and the possible values.

Component

Length

Type

Attribute

Value

Meaning

name

132

c

Name

name

Name

group1

3

c

Gruppe1

id1

Modification group

group2

3

c

Group2

id2

Modification group

group3

3

c

Group3

id3

Modification group

group4

3

c

Group4

id4

Modification group

required

1

c

Mandatory field

0, 1, 2

Mandatory or recommended field

input

1

c

Input

0, 1

Input-ready field

output

1

c

Output

0, 1

Display field

intensified

1

c

Light

0, 1

Highlighted field

invisible

1

c

Invisible

0, 1

Invisible element

length

1

x

VisLg

...

Field length

active

1

c

\-

0, 1

Active field

display\_3d

1

c

Two-dimensional

0, 1

Frame

value\_help

1

c

Input help

0, 1, 2

Input help button

request

1

c

\-

0, 1

Input exists

values\_in\_combo

1

c

Dropdown list box

0, 1

Input help exists

The component name contains the name name of the current dynpro field in the loop. The components group1 to group4 can contain three figure identifiers id1 to id4, which were assigned to the current screen element when it was defined. These identifiers allow the screen elements to be grouped together in up to four different [modification groups](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry"). These can be queried in logical expressions in the statement block after [LOOP AT SCREEN](javascript:call_link\('abaploop_at_screen.htm'\)) to process multiple screen elements in the same way.

The remaining components of the structure SCREEN (apart from request) show the display properties of the current screen element. With the exception of length, they can have the value 0 or 1, where content 1 means "active" and content 0 means "inactive". In addition, required and value\_help can also have the value 2:

-   With required, value 2 means a recommended field which is displayed on the screen in the same way as a mandatory field (value 1) but a check is not performed.

-   With value\_help, value 2 means that the input help button is always displayed, whereas value 1 means that the button is only displayed if the cursor is positioned on the dynpro field.

Except for active and request, all components of the structure SCREEN correspond directly to an attribute of the current screen element.

-   The component active does not have a corresponding attribute. A change to its content using [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)) influences the attributes input, output and invisible, and correspondingly the components input, output and invisible of the structure SCREEN.

-   The component request has the following meaning:

-   It is set to the value 1 by the runtime environment if the event PAI occurs, provided that user input exists has been entered in the dynpro field.

-   Using [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)), its content can be set to the value 1 at PBO time to simulate user input.

If the component request has the value 1 for a dynpro field at PAI time, those dialog modules are executed that are called for this field using the additions ON REQUEST and ON CHAIN-REQUEST after the dynpro statement [FIELD](javascript:call_link\('dynpfield_module.htm'\)).