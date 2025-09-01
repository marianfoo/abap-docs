  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Control Structures](javascript:call_link\('abenobsolete_control_structures.htm'\)) → 

ON CHANGE OF

[Quick Reference](javascript:call_link\('abapon_change_of_shortref.htm'\))

Obsolete Syntax

ON CHANGE OF dobj *\[*OR dobj1 *\[*OR dobj2*\]* ...*\]*.
  statement\_block1
*\[*ELSE.
  statement\_block2*\]*
ENDON.

Effect

The statements ON CHANGE OF and ENDON, which are forbidden in classes, define a [control structure](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry") that can contain two statement blocks: statement\_block1 and statement\_block2. After ON CHANGE OF, any number of data objects dobj1, dobj2... of any data type can be added, linked by OR.

The first time a statement ON CHANGE OF is executed, the first statement block statement\_block1 is executed if at least one of the specified data objects is not initial. The first statement block is executed for each additional execution of the same statement ON CHANGE OF, if the content of one of the specified data objects has been changed since the last time the statement ON CHANGE OF was executed. The optional second statement block statement\_block2 after ELSE is executed if the first statement block is not executed.

Each time the statement ON CHANGE OF is executed, the content of all the specified data objects is saved as a helper variable internally in the global system. The auxiliary variable is linked to this statement and cannot be accessed in the program. The helper variables and their content are preserved longer than the lifetime of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). A helper variable of this type can only be initialized if its statement ON CHANGE OF is executed while the associated data object is initial.

Note

This control structure is particularly prone to errors and should be replaced by [branches](javascript:call_link\('abenbranch_1_glosry.htm'\) "Glossary Entry") with explicitly declared helper variables.

Example

In a SELECT loop, a statement block should only be executed if the content of column CARRID has changed.

DATA spfli\_wa TYPE spfli.
SELECT \*
       FROM spfli
       ORDER BY carrid
       INTO @spfli\_wa.
  ...
  ON CHANGE OF spfli\_wa-carrid.
    ...
  ENDON.
  ...
ENDSELECT.

The following section of a program shows how the ON control structure can be replaced by an IF control structure with an explicit helper variable carrid\_buffer.

DATA: spfli\_wa TYPE spfli,
      carrid\_buffer TYPE spfli-carrid.
CLEAR carrid\_buffer.
SELECT \*
       FROM spfli
       ORDER BY carrid
       INTO @spfli\_wa.
  ...
  IF spfli\_wa-carrid <> carrid\_buffer.
    carrid\_buffer = spfli\_wa-carrid.
    ...
  ENDIF.
  ...
ENDSELECT.

Continue
[ENDON](javascript:call_link\('abapendon.htm'\))