'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// var process = require(process);
// var path = require(path);
// var fs = require(fs);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "cscope" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable_create_db = vscode.commands.registerCommand('extension.create_db', () => {
        // The code you place here will be executed every time your command is executed
        // console.log("Create a file list starting at " + path.join(vscode.workspace.rootPath, "fileList.txt"));
        // Display a message box to the user
        // vscode.window.showInformationMessage('cscope!');
        create_db(context);
    });

    let disposable_look_up_symbol = vscode.commands.registerCommand('extension.look_up_symbol', () => {
        // The code you place here will be executed every time your command is executed
        // console.log("Create a file list starting at " + vscode.workspace.rootPath);
        // Display a message box to the user
        // vscode.window.showInformationMessage('cscope!');
        look_up_symbol(context);
    });

    let disposable_look_up_global_definition = vscode.commands.registerCommand('extension.look_up_global_definition', () => {
        // The code you place here will be executed every time your command is executed
        // console.log("Create a file list starting at " + vscode.workspace.rootPath);
        // Display a message box to the user
        // vscode.window.showInformationMessage('cscope!');
        look_up_global_definition(context);
    });

        let disposable_look_up_called_functions = vscode.commands.registerCommand('extension.look_up_called_functions', () => {
        // The code you place here will be executed every time your command is executed
        // console.log("Create a file list starting at " + vscode.workspace.rootPath);
        // Display a message box to the user
        // vscode.window.showInformationMessage('cscope!');
        look_up_called_functions(context);
    });

        let disposable_look_up_calling_functions = vscode.commands.registerCommand('extension.look_up_calling_functions', () => {
        // The code you place here will be executed every time your command is executed
        // console.log("Create a file list starting at " + vscode.workspace.rootPath);
        // Display a message box to the user
        // vscode.window.showInformationMessage('cscope!');
        look_up_calling_functions(context);
    });

        let disposable_look_up_text_string = vscode.commands.registerCommand('extension.look_up_text_string', () => {
        // The code you place here will be executed every time your command is executed
        // console.log("Create a file list starting at " + vscode.workspace.rootPath);
        // Display a message box to the user
        // vscode.window.showInformationMessage('cscope!');
        look_up_text_string(context);
    });

        let disposable_close_all_cscope_searches= vscode.commands.registerCommand('extension.close_all_cscope_searches', () => {
        // The code you place here will be executed every time your command is executed
        // console.log("Create a file list starting at " + vscode.workspace.rootPath);
        // Display a message box to the user
        // vscode.window.showInformationMessage('cscope!');
        close_all_cscope_searches(context);
    });

    context.subscriptions.push(disposable_create_db);
    context.subscriptions.push(disposable_look_up_symbol);
    context.subscriptions.push(disposable_look_up_global_definition);
    context.subscriptions.push(disposable_look_up_called_functions);
    context.subscriptions.push(disposable_look_up_calling_functions);
    context.subscriptions.push(disposable_look_up_text_string);
    context.subscriptions.push(disposable_close_all_cscope_searches);
}

// this method is called when your extension is deactivated
export function deactivate() 
{
}

function create_db(context: vscode.ExtensionContext)
{
    console.log("In create_db");
}

function look_up_symbol(context: vscode.ExtensionContext)
{
    console.log("In look_up_symbol");
}

function look_up_global_definition(context: vscode.ExtensionContext)
{
    console.log("In look_up_global_definition");
}

function look_up_called_functions(context: vscode.ExtensionContext)
{
    console.log("In look_up_called_functions");
}

function look_up_calling_functions(context: vscode.ExtensionContext)
{
    console.log("In look_up_calling_functions");
}

function look_up_text_string(context: vscode.ExtensionContext)
{
    console.log("In look_up_text_string");
}

function close_all_cscope_searches(context: vscode.ExtensionContext)
{
    console.log("In close_all_cscope_searches");
}