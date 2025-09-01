---
title: "ABAP Statements, Overview"
description: |
  This section contains a thematically organized overview of all statements that are introduced by ABAP keywords(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_keyword_glosry.htm 'Glossary Entry'). An alphabetical list of all ABAP words can be found under ABAP Words(https://he
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_statements_overview.htm"
abapFile: "abenabap_statements_overview.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "exception-handling", "abenabap", "statements", "overview"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Statements%2C%20Overview%2C%20ABENABAP_STATEMENTS_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Statements, Overview

This section contains a thematically organized overview of all statements that are introduced by [ABAP keywords](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_keyword_glosry.htm "Glossary Entry"). An alphabetical list of all ABAP words can be found under [ABAP Words](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_words.htm).

Program-Initiating Statements   

[CLASS-POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-pool.htm)

Introduces a [class pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_pool_glosry.htm "Glossary Entry")

[FUNCTION-POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction-pool.htm)

Introduces a [function pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry")

[INTERFACE-POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterface-pool.htm)

Introduces an [interface pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_pool_glosry.htm "Glossary Entry")

[PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprogram.htm)

Introduces a [module pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmodul_pool_glosry.htm "Glossary Entry") or [subroutine pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_pool_glosry.htm "Glossary Entry")

[REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreport.htm)

Introduces an [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry")

[TYPE-POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype-pool.htm)

Introduces a [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry")

Modularization Statements   

Procedures   

[FUNCTION ... ENDFUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction.htm)

Defines a [function module](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_glosry.htm "Glossary Entry")

[METHOD ... ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm)

Defines a [method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry")

Dialog Modules   

[MODULE ... ENDMODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm)

Defines a [dialog module](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_module_glosry.htm "Glossary Entry")

Event Blocks   

[AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_line-selection.htm)

[List event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_event_glosry.htm "Glossary Entry")

[AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_selection-screen.htm)

[Selection screen event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_event_glosry.htm "Glossary Entry")

[AT USER-COMMAND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_user-command.htm)

[List event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_event_glosry.htm "Glossary Entry")

[END-OF-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-page.htm)

[List event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_event_glosry.htm "Glossary Entry")

[INITIALIZATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinitialization.htm)

[Reporting event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry")

[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapload-of-program.htm)

[Program constructor event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_construct_event_glosry.htm "Glossary Entry")

[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstart-of-selection.htm)

[Reporting event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry")

[TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptop-of-page.htm)

[List event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_event_glosry.htm "Glossary Entry")

Source Code Modules   

[DEFINE ... END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdefine.htm)

Defines a [macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmacro_glosry.htm "Glossary Entry")

[INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_prog.htm)

Includes an [include program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry")

Declarative Statements   

Data Types and Data Objects   

[CONSTANTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconstants.htm)

Declares a [constant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstant_glosry.htm "Glossary Entry")

[DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata.htm)

Declares a [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvariable_glosry.htm "Glossary Entry")

[FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols.htm)

Declares a [field symbol](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry")

[INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_type.htm)

Includes a [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry")

[NODES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnodes.htm)

Declares a [table work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_work_area_glosry.htm "Glossary Entry")

[STATICS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstatics.htm)

Declares a static [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvariable_glosry.htm "Glossary Entry")

[TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables.htm)

Declares a [table work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_work_area_glosry.htm "Glossary Entry")

[TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm)

Defines a [standalone data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstand-alone_data_type_glosry.htm "Glossary Entry")

Classes and Interfaces   

[ALIASES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapaliases.htm)

Declares an [alias name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenalias_glosry.htm "Glossary Entry")

[CLASS ... ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm)

Defines a [class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm "Glossary Entry")

[CLASS-DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-data.htm)

Declares a [static attribute](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_attribute_glosry.htm "Glossary Entry")

[CLASS-EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-events.htm)

Declares a [static event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_event_glosry.htm "Glossary Entry")

[CLASS-METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods.htm)

Declares a [static method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_method_glosry.htm "Glossary Entry")

[EVENTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapevents.htm)

Declares an [instance event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_event_glosry.htm "Glossary Entry")

[INTERFACE ... ENDINTERFACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterface.htm)

Defines an [interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoo_intf_glosry.htm "Glossary Entry")

[INTERFACES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterfaces.htm)

Includes an [interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoo_intf_glosry.htm "Glossary Entry")

[METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm)

Declares an [instance method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_method_glosry.htm "Glossary Entry")

[PRIVATE SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprivate.htm)

Introduces the package [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry")

[PROTECTED SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprotected.htm)

Introduces the protected [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry")

[PUBLIC SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abappublic.htm)

Introduces the public [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry")

Object Creation   

[CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm)

Creates an [anonymous data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry")

[CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm)

Creates an [object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_glosry.htm "Glossary Entry")

Calling and Exiting Program Units   

Calling Programs  

[CALL TRANSACTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transaction.htm)

Calls a [transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransaction_glosry.htm "Glossary Entry")

[LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_to_transaction.htm)

Calls a [transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransaction_glosry.htm "Glossary Entry")

[SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit.htm)

Calls an [executable program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry")

Calling Processing Blocks   

[CALL FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function.htm)

Calls a [function module](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_glosry.htm "Glossary Entry")

[CALL METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm)

Calls a [method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry") dynamically

[PERFORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapperform.htm)

Calls a [subroutine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_glosry.htm "Glossary Entry")

[RAISE EVENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_event.htm)

Triggers an [event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_glosry.htm "Glossary Entry")

[SET HANDLER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler.htm)

Registers an [event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_glosry.htm "Glossary Entry")

[SET USER-COMMAND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_user-command.htm)

Triggers a [list event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_event_glosry.htm "Glossary Entry")

Exiting Program Units   

[CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_loop.htm)

Exits a [loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_glosry.htm "Glossary Entry") pass or [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry")

[CONTINUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontinue.htm)

Exits a [loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_glosry.htm "Glossary Entry") pass

[EXIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_loop.htm)

Exits a [loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_glosry.htm "Glossary Entry") or [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry")

[LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_program.htm)

Exits an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry")

[RETURN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn.htm)

Exits a [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry")

[STOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstop.htm)

Exits a [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry")

Program Flow Logic   

Control Structures   

[DO ... ENDDO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo.htm)

[Loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_glosry.htm "Glossary Entry")

[CASE ... WHEN ... ENDCASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase.htm)

[Branch](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbranch_glosry.htm "Glossary Entry")

[CASE TYPE OF ... WHEN TYPE ... ENDCASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcase_type.htm)

[Case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_distinction_glosry.htm "Glossary Entry")

[IF ... ELSEIF ... ELSE ... ENDIF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapif.htm)

[Case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_distinction_glosry.htm "Glossary Entry")

[WHILE ... ENDWHILE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhile.htm)

[Loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_glosry.htm "Glossary Entry")

Program Interruption   

[WAIT UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_up_to.htm)

Interrupts a program for a specified time

Exception Handling   

[RAISE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm)

Triggers a non-class-based [exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_glosry.htm "Glossary Entry")

[RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm)

Triggers a [class-based exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_based_exception_glosry.htm "Glossary Entry")

[TRY ... CATCH ... CLEANUP ... ENDTRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm)

Handles [class-based exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_based_exception_glosry.htm "Glossary Entry")

[RESUME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapresume.htm)

Resumes after a [resumable exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresumable_exception_glosry.htm "Glossary Entry")

Assignments   

Special Assignments   

[MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove-corresponding.htm)

Assigns [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry") components

[UNPACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunpack.htm)

Unpacks a [packed number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpacked_number_glosry.htm "Glossary Entry")

Setting References   

[ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm)

Sets a [field symbol](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry")

[UNASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunassign.htm)

Initializes a [field symbol](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry")

[GET REFERENCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_reference.htm)

Sets a [data reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_glosry.htm "Glossary Entry")

Initializations   

[CLEAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclear.htm)

Initializes a [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry")

[FREE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_dataobject.htm)

Initializes a [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry")

Processing Internal Data   

Character String and Byte String Processing   

[CONCATENATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconcatenate.htm)

Concatenates [character strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") or [byte chains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_chain_glosry.htm "Glossary Entry")

[CONDENSE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcondense.htm)

Condenses a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry")

[CONVERT TEXT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_text.htm)

Converts a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry")

[FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm)

Searches in a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") or [byte chain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_chain_glosry.htm "Glossary Entry")

[GET BIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_bit.htm)

Reads individual bits in a [byte chain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_chain_glosry.htm "Glossary Entry")

[OVERLAY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapoverlay.htm)

Makes a replacement in a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry")

[REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace.htm)

Makes a replacement in a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") or [byte chain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_chain_glosry.htm "Glossary Entry")

[SET BIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_bit.htm)

Sets individual bits in a [byte chain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_chain_glosry.htm "Glossary Entry")

[SHIFT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapshift.htm)

Moves a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") or [byte chain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_chain_glosry.htm "Glossary Entry")

[SPLIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsplit.htm)

Splits a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") or [byte chain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_chain_glosry.htm "Glossary Entry")

[TRANSLATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptranslate.htm)

Transforms a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry")

[WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm)

Formats values as a character string

Date and Time Processing   

[CONVERT INTO UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date_utclong.htm)

Converts a date and time into a [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamp_glosry.htm "Glossary Entry") in a time stamp field

[CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_utclong.htm)

Converts a [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamp_glosry.htm "Glossary Entry") into a date and time in a time field

[CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date_time-stamp.htm)

Converts a date and time into a [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamp_glosry.htm "Glossary Entry") in a packed number

[CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_time-stamp.htm)

Converts a [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamp_glosry.htm "Glossary Entry") into a date and time in a packed number

[GET TIME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_time.htm)

Fills the [system fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_field_glosry.htm "Glossary Entry") for date and time

[GET TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_time-stamp.htm)

Creates a [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamp_glosry.htm "Glossary Entry") in a packed number

Internal Tables   

[APPEND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapappend.htm)

Appends lines to an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[COLLECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcollect.htm)

Inserts collected lines into an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm)

Deletes lines from an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[FIND IN TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_itab.htm)

Searches in an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm)

Inserts lines into an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[LOOP AT itab ... ENDLOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm)

Loop across an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[LOOP AT GROUP ... ENDLOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm)

Loop across a line group in an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_itab.htm)

[Group level processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_level_processing_glosry.htm "Glossary Entry")

[MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm)

Changes lines in an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[READ TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm)

Reads a line of an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_itab.htm)

Makes a replacement in an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm)

Sorts an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[SUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsum.htm)

Sums numeric fields in an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

Meshes   

[SET ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_set_association.htm)

Sets a [mesh association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_association_glosry.htm "Glossary Entry") for a [mesh path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_glosry.htm "Glossary Entry")

Properties of Data Objects   

[DESCRIBE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe.htm)

Determines the properties of a [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry")

Processing External Data   

ABAP SQL   

[CLOSE CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclose_cursor.htm)

Closes a [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry")

[DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm)

Deletes rows from a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[FETCH NEXT CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfetch.htm)

Reads rows using a [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry")

[INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm)

Inserts rows into a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm)

Changes or inserts rows in a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm)

Opens a [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry")

[SELECT ... ENDSELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm)

Reads rows from a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm)

Changes rows in a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm)

Defines [common table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry")

Native SQL   

[EXEC SQL ... ENDEXEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm)

Defines an area for embedded [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry")

ABAP and HANA   

[CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_database_procedure.htm)

Calls a [database procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") of the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry")

Secondary Connections   

[COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_rollback_connection.htm)

Completes an [SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw_glosry.htm "Glossary Entry") on a [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry")

[ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_rollback_connection.htm)

Rolls back an [SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw_glosry.htm "Glossary Entry") on a [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry")

Data Clusters   

[DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_cluster.htm)

Deletes [data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry")

[EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm)

Exports data objects into a [data cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry")

[FREE MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_memory.htm)

Deletes [data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") from the [ABAP memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_memory_glosry.htm "Glossary Entry")

[IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm)

Imports data objects from a [data cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry")

[IMPORT DIRECTORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_directory.htm)

Creates the interval directory of a [data cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry")

File Interface   

[CLOSE DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclose_dataset.htm)

Closes a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

[DELETE DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dataset.htm)

Deletes a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

[GET DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_dataset.htm)

Specifies the properties of a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

[OPEN DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset.htm)

Opens a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

[READ DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_dataset.htm)

Reads a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

[SET DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_dataset.htm)

Sets the properties of a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

[TRANSFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptransfer.htm)

Fills a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

[TRUNCATE DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptruncate.htm)

Changes the size of a [file](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_glosry.htm "Glossary Entry")

Data Consistency   

[AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm)

Checks an [authorization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_glosry.htm "Glossary Entry")

[COMMIT WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit.htm)

Completes an [SAP-LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw_glosry.htm "Glossary Entry")

[ROLLBACK WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprollback.htm)

Cancels an [SAP-LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw_glosry.htm "Glossary Entry")

[SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_update_task_local.htm)

Sets the local [update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_glosry.htm "Glossary Entry")

ABAP for RAP Business Objects   

ABAP EML   

[COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm)

Triggers the [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry").

[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions.htm)

Retrieves information about permissions of [RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").

[MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm)

Performs modify operations on [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry").

[READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm)

Performs read operations on [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry").

[ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprollback_entities.htm)

Rolls back all changes of the current [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry").

[SET LOCKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks_entity.htm)

Sets [enqueue locks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_lock.htm) for [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") to prevent the concurrent modification of instances.

Program Parameters   

User Memory   

[GET PARAMETER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_parameter.htm)

Reads an [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry")

[SET PARAMETER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_parameter.htm)

Sets an [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry")

Language Environment   

[GET LOCALE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_locale.htm)

Specifies the [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry").

[SET COUNTRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_country.htm)

Sets the [formatting settings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenformat_setting_glosry.htm "Glossary Entry") of the language environment

[SET LANGUAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_language.htm)

Loads a [text pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool_glosry.htm "Glossary Entry")

[SET LOCALE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locale.htm)

Sets the [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry")

Program Editing   

Testing and Checking Programs   

[ASSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm)

Defines an [assertion](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassertion_glosry.htm "Glossary Entry")

[BREAK-POINT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapbreak-point.htm)

Defines a [breakpoint](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbreakpoint_glosry.htm "Glossary Entry")

[LOG-POINT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplog-point.htm)

Defines a [logpoint](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogpoint_glosry.htm "Glossary Entry")

[GET RUN TIME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_run_time.htm)

Determines a [measuring interval](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmeasuring_intervall_glosry.htm "Glossary Entry")

[SET RUN TIME ANALYZER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_run_time_analyzer.htm)

Controls [runtime analysis](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_analysis_glosry.htm "Glossary Entry")

[SET RUN TIME CLOCK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_run_time_clock_resolution.htm)

Sets the measurement accuracy for [measuring intervals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmeasuring_intervall_glosry.htm "Glossary Entry")

[TEST-SEAM ... END-TEST-SEAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptest-seam.htm)

[Test seam](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentest_seam_glosry.htm "Glossary Entry")

[TEST-INJECTION ... END-TEST-INJECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptest-injection.htm)

[Injection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninjection_glosry.htm "Glossary Entry")

Dynamic Program Development   

[GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgenerate_subroutine_pool.htm)

Generates a [subroutine pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_pool_glosry.htm "Glossary Entry")

[INSERT REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_report.htm)

Stores an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry")

[INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_textpool.htm)

Stores a [text pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool_glosry.htm "Glossary Entry")

[READ REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_report.htm)

Imports an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry")

[READ TEXTPOOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_textpool.htm)

Imports a [text pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool_glosry.htm "Glossary Entry")

[SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_for_itab.htm)

Calls the [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_glosry.htm "Glossary Entry")

ABAP Data and Communication Interfaces   

Remote Function Call   

[CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_destination-.htm)

[Remote function call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenremote_function_call_glosry.htm "Glossary Entry")

[RECEIVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive.htm)

Receives parameters in a [remote function call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenremote_function_call_glosry.htm "Glossary Entry")

[WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_arfc.htm)

Waits for completion of a [remote function call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenremote_function_call_glosry.htm "Glossary Entry")

[WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_amc.htm)

Waits for messages in communication using [AMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_glosry.htm "Glossary Entry")

[WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_apc.htm)

Waits for messages in communication using [APC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenapc_glosry.htm "Glossary Entry")

ABAP and XML   

[CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation.htm)

Calls an [XSLT program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxslt_program_glosry.htm "Glossary Entry") or a [Simple Transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensimple_transformation_glosry.htm "Glossary Entry")

OLE Interface   

[CALL METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_ole2.htm)

Calls an [OLE automation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenole_automation_glosry.htm "Glossary Entry") method

[CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_ole2.htm)

Creates an [OLE automation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenole_automation_glosry.htm "Glossary Entry") object

[FREE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_object.htm)

Releases memory in [OLE automation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenole_automation_glosry.htm "Glossary Entry")

[GET PROPERTY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_property.htm)

Reads a property in [OLE automation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenole_automation_glosry.htm "Glossary Entry")

[SET PROPERTY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_property.htm)

Sets a property in [OLE automation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenole_automation_glosry.htm "Glossary Entry")

User Dialogs   

Dynpros   

[CALL SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_screen.htm)

Calls a [dynpro sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_sequence_glosry.htm "Glossary Entry")

[CONTROLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontrols.htm)

Declares a [control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_glosry.htm "Glossary Entry")

[EXIT FROM STEP-LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_step-loop.htm)

Exits a [table control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_control_glosry.htm "Glossary Entry") or [step loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstep_loop_glosry.htm "Glossary Entry")

[GET CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_dynpro.htm)

Reads the [cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencursor_glosry.htm "Glossary Entry") position

[GET PF-STATUS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_pf.htm)

Sets the [GUI status](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_status_glosry.htm "Glossary Entry")

[LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_screen.htm)

Exits a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry")

[LOOP AT SCREEN ... ENDLOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_screen.htm)

Loop across [screen elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_element_glosry.htm "Glossary Entry")

[MODIFY SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_screen.htm)

Modifies a [screen element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_element_glosry.htm "Glossary Entry")

[REFRESH CONTROL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_control.htm)

Initializes a [table control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_control_glosry.htm "Glossary Entry")

[SET CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_cursor_dynpro.htm)

Sets the [cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencursor_glosry.htm "Glossary Entry") position

[SET HOLD DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_hold_data.htm)

Enables or disables standard [menu items](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmenu_option_glosry.htm "Glossary Entry")

[SET PF-STATUS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_pf-status_dynpro.htm)

Sets the [GUI status](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_status_glosry.htm "Glossary Entry")

[SET SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_screen.htm)

Sets the [next dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennext_dynpro_glosry.htm "Glossary Entry")

[SET TITLEBAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_dynpro.htm)

Sets the [GUI title](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_title_glosry.htm "Glossary Entry")

[SUPPRESS DIALOG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsuppress.htm)

Suppresses the [screen layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry")

Selection Screens   

[PARAMETERS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters.htm)

Defines a [selection parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselpar_glosry.htm "Glossary Entry")

[SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen.htm)

Defines a [selection screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry") or a [screen element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_element_glosry.htm "Glossary Entry")

[SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect-options.htm)

Defines a [selection criterion](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_criterion_glosry.htm "Glossary Entry")

Lists   

[BACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapback.htm)

Relative positioning of [list cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_cursor_glosry.htm "Glossary Entry")

[DESCRIBE LIST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_list.htm)

Specifies the properties of a list in the [list buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_buffer_glosry.htm "Glossary Entry")

[FORMAT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapformat.htm)

Formats a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[GET CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_cursor_list.htm)

Reads the [cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencursor_glosry.htm "Glossary Entry") position

[HIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphide.htm)

Saves a data object in a [list level](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_level_glosry.htm "Glossary Entry")

[LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_to_list-processing.htm)

Calls [list processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_processing_glosry.htm "Glossary Entry")

[LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_list-processing.htm)

Exits [list processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_processing_glosry.htm "Glossary Entry")

[MODIFY LINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_line.htm)

Changes a list in the [list buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_buffer_glosry.htm "Glossary Entry")

[NEW-LINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-line.htm)

Line break in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[NEW-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-page.htm)

Page break in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[POSITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapposition.htm)

Positions the [list cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_cursor_glosry.htm "Glossary Entry")

[PRINT-CONTROL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprint-control.htm)

Formats a [spool list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspool_list_glosry.htm "Glossary Entry")

[READ LINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_line.htm)

Reads a list in the [list buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_buffer_glosry.htm "Glossary Entry")

[RESERVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreserve.htm)

Relative page break in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[SCROLL LIST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapscroll.htm)

Scrolls in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[SET BLANK LINES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_blank_lines.htm)

Sets the blanks in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[SET CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_cursor_list.htm)

Sets the [cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencursor_glosry.htm "Glossary Entry") position

[SET MARGIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_margin.htm)

Sets the margin of a [spool list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspool_list_glosry.htm "Glossary Entry")

[SET PF-STATUS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_pf-status_list.htm)

Sets the [GUI status](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_status_glosry.htm "Glossary Entry")

[SET LEFT SCROLL-BOUNDARY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_scroll-boundary.htm)

Sets the scroll boundaries of a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[SET TITLEBAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_list.htm)

Sets the [GUI title](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_title_glosry.htm "Glossary Entry")

[SKIP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapskip.htm)

Positions the [list cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_cursor_glosry.htm "Glossary Entry")

[ULINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapuline.htm)

Displays a line in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[WINDOW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwindow.htm)

Displays a list in a [dialog box](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_box_glosry.htm "Glossary Entry")

[WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm)

Displays data in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

Messages   

[MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm)

Sends a [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry")

Enhancements   

Source Code Enhancements   

[ENHANCEMENT ... ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement.htm)

Implements a [source code enhancement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry")

[ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-point.htm)

Defines a [source code enhancement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry")

[ENHANCEMENT-SECTION ... END-ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)

Defines a [source code enhancement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry")

Enhancements Using BAdIs   

[GET BADI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_badi.htm)

Creates a [BAdI object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_object_glosry.htm "Glossary Entry")

[CALL BADI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_badi.htm)

Calls [BAdI methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_method_glosry.htm "Glossary Entry")

Statements for Experts   

[INFOTYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinfotypes.htm)

Declares an internal table for HR [info types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninfo_type_glosry.htm "Glossary Entry")

[PROVIDE ... ENDPROVIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm)

Loop across multiple [internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

Obsolete Statements   

Obsolete Modularization   

[FORM ... ENDFORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform.htm)

Defines a [subroutine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_glosry.htm "Glossary Entry")

[END-OF-EDITING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-editing.htm)

[Reporting event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry")

[END-OF-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-selection.htm)

[Reporting event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry")

[GET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm)

[Reporting event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry")

[START-OF-EDITING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstart-of-editing.htm)

[Reporting event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry")

[LOCAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplocal.htm)

Buffers a [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry")

Obsolete Declarations   

[FIELDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfields.htm)

Addresses a [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry")

[RANGES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapranges.htm)

Declares a [ranges table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenranges_table_glosry.htm "Glossary Entry")

[TYPE-POOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype-pools.htm)

Loads a [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry")

Obsolete Calls   

[CALL CUSTOMER-FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_customer-function.htm)

Calls a [function module exit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_exit_glosry.htm "Glossary Entry")

[CALL DIALOG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_dialog.htm)

Calls a [dialog module](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_module_object_glosry.htm "Glossary Entry")

[PUT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapput.htm)

Triggers a [reporting event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry")

Obsolete Exit   

[LEAVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave-.htm)

Context-dependent exit of an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry")

[REJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreject.htm)

Exits a [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry") for [logical databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry")

Obsolete Control Structure   

[ON CHANGE OF ... ENDON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapon.htm)

Obsolete [branch](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbranch_glosry.htm "Glossary Entry")

Obsolete Exception Handling   

[CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_sys.htm)

Catches [catchable runtime errors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry")

Obsolete Assignments   

[MOVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_obs.htm)

Assigns data objects

[MOVE - PERCENTAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_percentage.htm)

Assigns a subobject of a [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry")

[PACK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abappack.htm)

Packs a [packed number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpacked_number_glosry.htm "Glossary Entry")

Obsolete Calculation Statements   

[COMPUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute.htm)

Calculates a [calculation expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_expression_glosry.htm "Glossary Entry")

[ADD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd.htm)

Adds [numeric data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

[ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

Adds [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry") components

[DIVIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubtract_multiply_divide.htm)

Divides [numeric data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

[DIVIDE-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

Divides [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry") components

[MULTIPLY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubtract_multiply_divide.htm)

Multiplies [numeric data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

[MULTIPLY-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

Multiplies [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry") components

[SUBTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubtract_multiply_divide.htm)

Subtracts [numeric data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

[SUBTRACT-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapadd-corresponding.htm)

Subtracts [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_glosry.htm "Glossary Entry") components

Obsolete Character String and Byte String Processing   

[CONVERT DATE*|*INVERTED-DATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date.htm)

Transforms a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") into nine's complement

[REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_obsolete.htm)

Makes a replacement in a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") or [byte string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_string_glosry.htm "Glossary Entry")

[SEARCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsearch-.htm)

Searches in a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") or [byte string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_string_glosry.htm "Glossary Entry") (obsolete)

Obsolete Internal Table Processing   

In [Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry")

[REFRESH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_itab.htm)

Initializes an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry") (obsolete)

[SEARCH itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsearch_itab.htm)

Searches in an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry") (obsolete)

[WRITE TO itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_itab.htm)

Writes to an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry") (obsolete)

Obsolete Extracts   

[AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_extract.htm)

[Group level processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_level_processing_glosry.htm "Glossary Entry") in the [extract dataset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry")

[EXTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapextract.htm)

Fills the [extract dataset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry")

[FIELD-GROUPS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-groups.htm)

Declares a [field group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_group_glosry.htm "Glossary Entry")

[INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_fg.htm)

Builds a [field group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_group_glosry.htm "Glossary Entry")

[LOOP ... ENDLOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop-.htm)

Loop across the [extract dataset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry")

[SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_extract.htm)

Sorts the [extract dataset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry")

Obsolete Database Access   

[DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab_obsolete.htm)

Deletes a row in a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[LOOP AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_dbtab.htm)

Loop across a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab_obsolete.htm)

Changes a row in a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[READ TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_dbtab.htm)

Reads a row in a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

[REFRESH FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprefresh_obsolete.htm)

Reads rows in a [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")

Native SQL   

[EXIT FROM SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_sql.htm)

Exits implicit cursor processing of [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry")

Contexts   

[CONTEXTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontexts.htm)

Data type for [contexts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontext_glosry.htm "Glossary Entry")

[DEMAND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdemand.htm)

Requests a [context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontext_glosry.htm "Glossary Entry")

[SUPPLY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsupply.htm)

Fills the key fields of a [context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontext_glosry.htm "Glossary Entry")

Obsolete Statements in List Processing   

[AT PFnn](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_pfnn.htm)

Obsolete [list event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_event_glosry.htm "Glossary Entry")

[DETAIL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdetail.htm)

Intensity of the background color in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[INPUT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinput.htm)

[List](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry") availability for input

[MAXIMUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmaximum.htm)

Maximum value of output values in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[MINIMUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapminimum.htm)

Minimum value of output values in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[NEW-SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-section.htm)

Controls a [spool list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspool_list_glosry.htm "Glossary Entry").

[SUMMARY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsummary.htm)

Intensity of the background color in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

[SUMMING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsumming.htm)

Sums output values in a [list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry")

Obsolete Editor Calls   

[EDITOR-CALL FOR itab.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeditor-call_for_itab.htm)

Calls a [GUI control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_control_glosry.htm "Glossary Entry") (obsolete)

[EDITOR-CALL FOR REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeditor-call_for_report.htm)

Calls the [ABAP Editor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_editor_glosry.htm "Glossary Entry")

Obsolete Tests and Checks   

[SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_extended_check.htm)

Controls the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry")

Obsolete External Programming Interface   

[COMMUNICATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommunication.htm)

Addresses the [CPI-C interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cpic.htm)

Internal Statements   

Program Editing   

[DELETE DYNPRO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dynpro.htm)

Deletes a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry")

[DELETE REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_report.htm)

Deletes an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry")

[DELETE TEXTPOOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_textpool.htm)

Deletes a [text pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool_glosry.htm "Glossary Entry")

[EXPORT DYNPRO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_dynpro.htm)

Exports a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry")

[GENERATE DYNPRO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgenerate_dynpro.htm)

Generates a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry")

[GENERATE REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgenerate_report.htm)

Generates an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry")

[LOAD REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapload.htm)

Loads an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry")

[IMPORT DYNPRO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_dynpro.htm)

Imports a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry")

[SCAN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapscan.htm)

Splits an [ABAP program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry") into tokens

[SYNTAX-CHECK FOR DYNPRO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_for_dynpro.htm)

Syntax check for a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry")

[SYNTAX-TRACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-trace.htm)

Modifies the [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_glosry.htm "Glossary Entry")

External Interface   

[CALL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall-.htm)

Calls a c function of the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry")